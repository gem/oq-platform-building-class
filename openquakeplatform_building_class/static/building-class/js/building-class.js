/*
  TODO:

  DONE - countries
  DONE - remove countries blocks
  DONE - hide trees
  DONE - insert new as first (.prepend)
  DONE = import other trees descr.
  DONE - produce tables with flat version and dropdown with frequencies for Urban and Rural
  DONE - disclaimer
  DONE - data json creation
  DONE - django model
  DONE - send data as json object
  DONE - save/modify/delete rows
  DONE - populate the page with already inserted data
  DONE - json to js => done
  DONE - populate the page
  DONE - security issues
  DONE - disclaimer when not logged
  HALF - styling

  - recursive unclick require confirm


  NEXT ITERATION:
  - digest mail with new entries
  - admin view
*/

var gem_bcs_transl = {};
var gem_bcs_transl_id = "en";

function __(id) {
    if (id in gem_bcs_transl[gem_bcs_transl_id])
        return gem_bcs_transl[gem_bcs_transl_id][id];
    else if (id in gem_bcs_transl["en"])
        return gem_bcs_transl["en"][id];
    else
        return id;
}

function node_lang_update(index)
{
    var node_id = $(this).attr('data-gem-id');
    $(this).children('span[name="descr"]').text(__(node_id));
}

function tree_lang_update(index)
{
    var tit = $(this).find('p[name="title"]')[0];
    $(tit).text(__($(tit).attr('data-gem-country')));
    $(this).children('span[name="descr"]').text(__('material'));
    $(this).find('li[name="node"]').each(node_lang_update);
}


function lang_update() {
    // country names
    $('select#country-id > option').each(function (idx) {$(this).text(__($(this).attr('value'))); });
    $('button#new-classification').text(__('new classification'))

    $('div#forest > div[name="tree"]').each(tree_lang_update);
}

function language_change_cb() {
    gem_bcs_transl_id = $(this).val();
    lang_update();
}

function choices_create(item, model)
{
    var $grp;
    var li = [];

    if (model.sub == null)
        return;
    $grp = $('<div>', { 'name': 'sub' });
    $grp.append($('<p>', { 'class': 'sub-title', 'text': __(model.sub.name) }));
    $ul = $('<ul>');

    for (i in model.sub.el) {
        var checkbox = $('<input>', {'type': 'checkbox', 'name': model.sub.el[i].name, 'class': 'checkbox'});
        checkbox[0].data_gem_model = model.sub.el[i];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': model.sub.el[i].name}).append(
            checkbox, $("<span>", {'name': 'descr', 'text': __(model.sub.el[i].name)})));
    }
    $(item).append($grp.append($ul.append(li)));
}

function frequency_ddown_create(name)
{
    var freq = [ 'inexistent', 'rare', 'moderately freq.', 'frequent', 'very frequent'];
    var freq_id = [ 'inex', 'rare', 'modr', 'freq', 'very'];
    var defa = "frequent";

    var $sel = $('<select>', { 'name': name, 'class': 'frequency' });
    var $opt;

    for (var i = 0 ; i < freq.length ; i++) {
        $opt = $('<option>', { 'value': freq_id[i], 'text': __(freq[i]) });
        if (freq[i] == defa) {
            $opt.attr('selected', 'selected');
        }
        $sel.append($opt);
    }
    return $sel;
}

function build_classes_update(checkbox) {
    var $tree, $leafs, $leaf, line, build_classes_new = [];
    var i, e, o, $table, $rows, $tr, sep = " | ", descr;

    $tree = $(checkbox).parents('div[name="tree"]');
    $leafs = $tree.find('input[type="checkbox"]:checked:not(:has(~ div input[type="checkbox"]:checked))');

    for (i = 0 ; i < $leafs.length ; i++) {
        $leaf =  $($leafs[i]);
        build_classes_new[i] = [];
        do {
            build_classes_new[i].push($leaf.attr('name'));
            if ($leaf.parent().attr('data-gem-base') != undefined) {
                break;
            }
            $leaf = $leaf.parent().parent().parent().parent().children('input[type="checkbox"]');
        } while (true);
    }

    $table = $tree.children("table[name='build_classes']");

    // set all rows as not checked
    $table.find("tr[name='path']").each(function () { this.checked = false });
    // check if rows are already present
    for (i = 0 ; i < build_classes_new.length ; i++) {
        $rows = $table.find("tr[name='path']");
        for (e = 0 ; e < $rows.length ; e++) {
            // console.log("I:" + i + " E:" + e + " Len(i): " +
            //            $rows[e].data_gem_path.length + " Len(e): " +  build_classes_new[i].length);
            if ($rows[e].data_gem_path.length != build_classes_new[i].length) {
                // if build_classes has different length are not the same, continue
                continue;
            }
            for (o = 0 ; o < build_classes_new[i].length ; o++) {
                if ($rows[e].data_gem_path[o] != build_classes_new[i][o])
                    break;
            }
            if (o < build_classes_new[i].length) {
                // some element of arrays not matches, continue
                continue;
            }
            $rows[e].checked = true;
            break;
        }
        if (e == $rows.length) {
            // build_classes_new[i] not already exists in the table, create it
            descr = "";
            for (o = (build_classes_new[i].length - 1) ; o >= 0 ; o--) {
                if (build_classes_new[i][o] != "Unknown") {
                    descr += __(build_classes_new[i][o]) + (o == 0 ? "" : sep);
                }
            }
            $td = $("<td>", { "text": descr, "class": "path" });
            $tr = $("<tr>", { "name": "path" });
            $tr[0].data_gem_path = build_classes_new[i].slice(0);
            $tr[0].checked = true;
            $tr.append($td,
                       $('<td>').append(frequency_ddown_create('urban')),
                       $('<td>').append(frequency_ddown_create('rural')));
            $table.append($tr);
        }
    }
    $table.find("tr[name='path']").each(function () { if(!this.checked) $(this).remove() });
    if ($table.find("tr[name='path']").length > 0)
        $table.show();
    else
        $table.hide();
}

function checkbox_click_cb() {
    var item = $(this).parent();
    if (this.checked) {
        var model = this.data_gem_model;
        var choices;

        var sub = $(item).children('div[name="sub"]');
        if (sub.length == 0) {
            // create a sub object with choices
            choices = choices_create(item, model);
        }
        else {
            sub.show();
        }
    }
    else { // try to hide subgroup (if no other sub checkbox are checked)
        var checked = $(item).find('input[type="checkbox"]:checked');
        if (checked.length == 0) {
            var sub = $(item).children('div[name="sub"]');
            sub.hide();
        }
        else {
            alert('Uncheck all sub-items before it');
            return false;
        }
    }
    build_classes_update(this);
}

function country_del_cb() {
    var country = $(this).parent().find("p[name='title']").text();
    if (confirm(__("Do you really want to delete '" + country + __("' classification?")))) {
        $(this).parent().remove();
        if ($('div#forest > div[name="tree"]').length == 0) {
            $("button[name='save']").hide();
        }
    }
}

function cascade_showhide(to_show, $notes, $cascade, $button) {
    if (to_show == false) {
        $cascade.hide();
        if ($notes.find("textarea[name='notes']").val().trim() == "") {
            $notes.hide();
        }

        $button.html(__('show'));
        $button.attr('data-gem-show', 'false');
    }
    else {
        $cascade.show();
        $notes.show();
        $button.html(__('hide'));
        $button.attr('data-gem-show', 'true');
    }
}


function cascade_showhide_cb() {
    var to_show = $(this).attr('data-gem-show') != 'true';
    var $tree, $notes, $cascade;

    $button = $(this);
    $tree = $button.parents("div[name='tree']");
    $notes = $tree.children("div[name='notes']");
    $cascade = $tree.children("div[name='cascade']");

    cascade_showhide(to_show, $notes, $cascade, $(this));
}

function classification_add(country) {
    var li = [];
    var notes = "";
    var build_classes = [];
    var show = true;
    var is_table_visible = false;

    if (arguments.length == 4) {
        notes = arguments[1];
        build_classes = arguments[2];
        show = arguments[3];
    }

    var material, materials = ['Masonry', 'Concrete', 'Steel', 'Composite', 'Wood'];
    for (k in materials) {
        material = materials[k];

        var checkbox = $('<input>', {'type': 'checkbox', name: material, 'class': 'checkbox'});
        checkbox[0].data_gem_model = gem_bcs_tree_descr[material.toLowerCase()];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': material,
                           'data-gem-base': 'true'}).append(
            checkbox, $("<span>", {'name': 'descr', 'class': 'gem_capitalize',
                                   'text': __(material)})));
    }

    var del_btn = $('<button>', {'name': 'delete', 'class': 'classification_del', 'text': __('delete') });
    del_btn.on('click', classification_del_cb);
    var cascade_showhide_btn = $('<button>', {'name': 'cascade_showhide', 'class': 'cascade_showhide',
                                              'data-gem-show': 'true', 'text': __('hide') });
    cascade_showhide_btn.on('click', cascade_showhide_cb);

    var $table = $("<table>", {"name": "build_classes", "class": "build_classes"}).append(
        $("<tr>").append($("<th>", {"text": __("building type")}),
                         $("<th>", {"text": __("urban") }),
                         $("<th>", {"text": __("rural") }))
    );

    if (build_classes.length == 0)
        $table.hide();

    $tree = $("<div>", {'name': 'tree', 'class': 'tree', 'data-gem-country': country}).append(
        $('<p>', {'name': 'title', 'data-gem-country': country,
                  'class': 'classification_title', 'text': __(country)}), del_btn, cascade_showhide_btn,
        $('<div>', { 'name': 'notes', 'class': 'notes'}).append(
            $('<p>', {'class': 'classification_notes', 'text': __('notes')}),
            $('<p>', {'class': 'classification_notes'}).append(
                $('<textarea>', {'name': 'notes', 'maxlength': '1024',
                                 'class': 'classification_notes', 'value': notes}))
        ),
        $('<div>', {'name': 'cascade'}).append(
            $('<p>', {'name': 'descr', 'class': 'sub-title',
                      'text': __('Material')}),
            $("<ul>").append(li)),
        $table
    );

    $notes = $tree.children("div[name='notes']");
    $cascade = $tree.children("div[name='cascade']");

    cascade_showhide(show, $notes, $cascade, cascade_showhide_btn);

    if (arguments.length == 1)
        $("div#forest").prepend($tree);
    else
        $("div#forest").append($tree);

    for (var i = 0 ; i < build_classes.length ; i++) {
        var build_class = build_classes[i];
        var atoms = build_class.path.split('|');
        var atom, $ul, $li, $cbox;

        console.log(atoms);
        $ul = $cascade.children("ul");
        for (var e = atoms.length - 1 ; e >= 0 ; e--) {
            atom = atoms[e];
            console.log(atom);
            $li = $ul.children("li[name='node'][data-gem-id='" + atom + "']");
            $cbox = $li.children("input[type='checkbox'][name='" + atom + "']");
            // checkbox_click_cb($cbox[0]);
            $cbox.prop('checked', true).triggerHandler('click');
            $ul = $li.children("div[name='sub']").children("ul");
        }
        $tr = $table.find("tr[name='path']").last();
        $tr.find("select[name='urban']").val(build_class.urban);
        $tr.find("select[name='rural']").val(build_class.rural);

    }


    $("button[name='save']").show();
}

function classification_add_cb() {
    var country = $("select#country-id").val();

    classification_add(country);
}




function build_class2obj(bc_row)
{
    var obj = { path: "", urban: "", rural: "" };
    var path = bc_row.data_gem_path;

    for (var i = 0 ; i < path.length ; i++) {
        obj.path += (i == 0 ? "" : "|") + path[i];
    }
    obj.urban = $(bc_row).find("select[name='urban']").val();
    obj.rural = $(bc_row).find("select[name='rural']").val();

    return obj;
}

function tree2obj(idx, tree)
{
    var obj = { country: "", notes: "", build_classes: [] };
    var $bc_rows = $(tree).find("table[name='build_classes'] tr[name='path']");
    var bc_idx, bc_row;

    obj.country = $(tree).find("p[name='title']").attr("data-gem-country");
    obj.notes = $(tree).find("textarea[name='notes']").val();

    for (bc_idx = 0 ; bc_idx < $bc_rows.length ; bc_idx++) {
        bc_row = $bc_rows[bc_idx];
        obj.build_classes.push(build_class2obj(bc_row));
    }

    return obj;
}

function save_resp_clean()
{
    $("div[name='save_resp']").html("<br>");
    $("div[name='save_resp']").attr("class", "");
}

function save_cb()
{
    var tree, $trees = $("div#forest div[name='tree']");
    var obj = {};
    obj.classifications = [];

    for (idx = 0 ; idx < $trees.length ; idx++) {
        tree = $trees[idx];
        obj.classifications.push(tree2obj(idx, tree));
    }

    $.ajax({
        type: 'post',
        contentType: 'application/json',
        dataType: 'json',
        url: 'data',
        data: JSON.stringify(obj),
        success: function (resp) {
            $("div[name='save_resp']").text(resp.ret_s);
            if (resp.ret == 0)
                $("div[name='save_resp']").attr("class", "save_resp_ok");
            else
                $("div[name='save_resp']").attr("class", "save_resp_err");
            setTimeout(save_resp_clean, 3000);
        },
        error: function (response) {
            $("div[name='save_resp']").text(resp.ret_s);
            if (resp.ret == 0)
                $("div[name='save_resp']").attr("class", "save_resp_ok");
            else
                $("div[name='save_resp']").attr("class", "save_resp_err");
            setTimeout(save_resp_clean, 3000);
        },
    });

}

$(document).ready(function building_class_main() {
    // gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-classification').on('click', classification_add_cb);
    $('select#language-id').on('change', language_change_cb);
    $("button[name='save']").on('click', save_cb);
    lang_update();
    for (var i = 0 ; i < gem_bcs_classifications.length ; i++) {
        var classification = gem_bcs_classifications[i];
        classification_add(classification.country, classification.notes, classification.build_classes, false);
    }
})

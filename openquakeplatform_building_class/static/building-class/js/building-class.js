/*
  TODO:

  DONE - countries
  DONE - remove countries blocks
  DONE - hide trees
  DONE - insert new as first (.prepend)
  DONE = import other trees descr.
  DONE - produce tables with flat version and dropdown with frequencies for Urban and Rural
  DONE - disclaimer

  - data json creation
  - send data as json object
  - django model
  - save/modify/delete rows
  - populate the page with already present data

  - disclaimer when not logged
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
    $(tit).text(__($(tit).attr('data-gem-nation')));
    $(this).children('span[name="descr"]').text(__('material'));
    $(this).find('li[name="node"]').each(node_lang_update);
}


function lang_update() {
    // nation names
    $('select#nation-id > option').each(function (idx) {$(this).text(__($(this).attr('value'))); });
    $('button#new-nation').text(__('new country'))

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
    var defa = "frequent";

    var $sel = $('<select>', { 'name': name, 'class': 'frequency' });
    var $opt;

    for (var i = 0 ; i < freq.length ; i++) {
        $opt = $('<option>', { 'value': freq[i], 'text': __(freq[i]) });
        if (freq[i] == defa) {
            $opt.attr('selected', 'selected');
        }
        $sel.append($opt);
    }
    return $sel;
}

function paths_update(checkbox) {
    var $tree, $leafs, $leaf, line, paths_new = [];
    var i, e, o, $table, $rows, $tr, sep = " | ", descr;

    $tree = $(checkbox).parents('div[name="tree"]');
    $leafs = $tree.find('input[type="checkbox"]:checked:not(:has(~ div input[type="checkbox"]:checked))');

    for (i = 0 ; i < $leafs.length ; i++) {
        $leaf =  $($leafs[i]);
        paths_new[i] = [];
        do {
            paths_new[i].push($leaf.attr('name'));
            if ($leaf.parent().attr('data-gem-base') != undefined) {
                break;
            }
            $leaf = $leaf.parent().parent().parent().parent().children('input[type="checkbox"]');
        } while (true);
    }
    console.log(paths_new);

    $table = $tree.children("table[name='paths']");
    console.log('TAB len: ' + $table.length);
    // TODO: set all rows as not checked
    // $rows[e].checked
    $table.find("tr[name='path']").each(function () { this.checked = false });
    // check if rows are already present
    for (i = 0 ; i < paths_new.length ; i++) {
        $rows = $table.find("tr[name='path']");
        console.log("$rows.length: " + $rows.length);
        for (e = 0 ; e < $rows.length ; e++) {
            console.log("I:" + i + " E:" + e + " Len(i): " +
                        $rows[e].data_gem_path.length + " Len(e): " +  paths_new[i].length);
            if ($rows[e].data_gem_path.length != paths_new[i].length) {
                // if paths has different length are not the same, continue
                continue;
            }
            for (o = 0 ; o < paths_new[i].length ; o++) {
                if ($rows[e].data_gem_path[o] != paths_new[i][o])
                    break;
            }
            if (o < paths_new[i].length) {
                // some element of arrays not matches, continue
                continue;
            }
            $rows[e].checked = true;
            break;
        }
        if (e == $rows.length) {
            // paths_new[i] not already exists in the table, create it
            descr = "";
            for (o = (paths_new[i].length - 1) ; o >= 0 ; o--) {
                if (paths_new[i][o] != "Unknown") {
                    descr += __(paths_new[i][o]) + (o == 0 ? "" : sep);
                }
            }
            $td = $("<td>", { "text": descr, "class": "path" });
            $tr = $("<tr>", { "name": "path" });
            $tr[0].data_gem_path = paths_new[i].slice(0);
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


    // remove from paths row already present in gem_bcs_flatten
    // remove from gem_bcs_flatten lines not present in flatten (table included)
    // add new rows to gem_bcs_flatten
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
    paths_update(this);
}

function country_del_cb() {
    var nation = $(this).parent().find("p[name='title']").text();
    if (confirm(__("Do you really want to delete '" + nation + "' classification?"))) {
        $(this).parent().remove();
    }
}

function cascade_showhide_cb() {
    var is_show = $(this).attr('data-gem-show');
    var $tree, $notes;

    $tree = $(this).parents("div[name='tree']");
    $notes = $tree.children("div[name='notes']");
    if (is_show == 'true') {
        $tree.children("div[name='cascade']").hide();
        if ($tree.find("textarea[name='notes']").val().trim() == "") {
            console.log("<<<" + $tree.find("textarea[name='notes']").val().trim() + ">>>");
            $notes.hide();
        }

        $(this).html(__('show'));
        $(this).attr('data-gem-show', 'false');
    }
    else {
        $tree.children("div[name='cascade']").show();
        $notes.show();
        $(this).html(__('hide'));
        $(this).attr('data-gem-show', 'true');
    }
}

function country_add_cb() {
    var nation, li = [];

    nation = $("select#nation-id").val();

    var material = ['masonry', 'concrete', 'steel', 'composite', 'wood'];
    for (k in material) {
        var checkbox = $('<input>', {'type': 'checkbox', name: material[k], 'class': 'checkbox'});
        checkbox[0].data_gem_model = gem_bcs_tree_descr[material[k]];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': material[k],
                           'data-gem-base': 'true'}).append(
            checkbox, $("<span>", {'name': 'descr', 'class': 'gem_capitalize',
                                   'text': __(material[k])})));
    }

    var del_btn = $('<button>', {'name': 'delete', 'class': 'country_del', 'text': __('delete') });
    del_btn.on('click', country_del_cb);
    var cascade_showhide_btn = $('<button>', {'name': 'cascade_showhide', 'class': 'cascade_showhide',
                                      'data-gem-show': 'true', 'text': __('hide') });
    cascade_showhide_btn.on('click', cascade_showhide_cb);

    var $table = $("<table>", {"name": "paths", "class": "paths"}).append(
        $("<tr>").append($("<th>", {"text": __("building type")}),
                         $("<th>", {"text": __("urban") }),
                         $("<th>", {"text": __("rural") }))
    );

    $table.hide();

    $("div#forest").prepend(
        $("<div>", {'name': 'tree', 'class': 'tree', 'data-gem-nation': nation}).append(
            $('<p>', {'name': 'title', 'data-gem-nation': nation,
                      'class': 'country_title', 'text': __(nation)}), del_btn, cascade_showhide_btn,
            $('<div>', { 'name': 'notes', 'class': 'notes'}).append(
                $('<p>', {'class': 'country_notes', 'text': __('notes')}),
                $('<p>', {'class': 'country_notes'}).append(
                    $('<textarea>', {'name': 'notes', 'maxlength': '1024',
                                     'class': 'country_notes'}))
            ),
            $('<div>', {'name': 'cascade'}).append(
                $('<p>', {'name': 'descr', 'class': 'sub-title',
                             'text': __('Material')}),
                $("<ul>").append(li)),
            $table
        )
    );
}

$(document).ready(function building_class_main() {
    gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-nation').on('click', country_add_cb);
    $('select#language-id').on('change', language_change_cb);
    lang_update();
})

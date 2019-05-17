/*
   Copyright (c) 2017, GEM Foundation.

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU Affero General Public License as
      published by the Free Software Foundation, either version 3 of the
      License, or (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU Affero General Public License for more details.

      You should have received a copy of the GNU Affero General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var gem_bcs_transl = {};
var gem_bcs_transl_id = "en";
var gem_occupancy_names = ['residential', 'commercial', 'industrial', 'educational', 'healthcare', 'governmental'];

var gem_bcs_to_init_phase = false;
var gem_bcs_to_be_saved = false;

function table2csv(tab) {
    var out = "";

    for (i = 0 ; i < tab.length ; i++) {
        for (e = 0 ; e < tab[i].length ; e++) {
            var el = String(tab[i][e]);
            if (e > 0)
                out += ",";
            if (el.indexOf('"') == -1 && el.indexOf(',') == -1 &&
                el.indexOf("\r") == -1 && el.indexOf("\n") == -1) {
                out += el;
            }
            else {
                out += '"';
                out += el.replace(/"/g, '""');
                out += '"';
            }
        }
        out += "\r\n";
    }
    return out;
}

function copy_to_clipboard(matrix) {
    var content = table2csv(matrix);

    if (document.queryCommandSupported("Copy")) {
        $clip_area = $('<textarea>', {'text': content});
        $('body').append($clip_area);
        $clip_area.select();
        document.execCommand("Copy");
        $clip_area.remove();
    }
    else {
        gem_modal_alert(
            __('Clipboad copy not supported.'),
            __('<div>This feature is not supported by your browser.<br>Please, use a more recent version or use firefox or chrome to be able to copy tables to clipboard.</div>'));
    }
}

var confirmOnPageExit = function (e)
{
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = __('Your data seems to be changed before last "save", are you sure that you want to leave the page?');

    // For IE6-8 and Firefox prior to version 4
    if (e)
    {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};

function to_be_saved(is_it)
{
    if (gem_bcs_to_init_phase)
        return;

    if (is_it) {
        gem_bcs_to_be_saved = true;

        $(window).on('beforeunload', confirmOnPageExit);
        var $save_risp = $("div[name='save_resp']");

        $("div#forest div[name='tree']").addClass('to_be_saved');
        $("div#forest p[name='to-be-saved']").show();

        $save_risp.html(__('(modified)'));
        $save_risp.addClass("save_resp_warn");
    }
    else {
        gem_bcs_to_be_saved = false;

        $(window).off('beforeunload', confirmOnPageExit);

        $("div#forest div[name='tree']").removeClass('to_be_saved');
        $("div#forest p[name='to-be-saved']").hide();
        save_resp_clean();
    }
}

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

function freq_qual_cb(event)
{
    to_be_saved(true);
}

function frequency_ddown_create(name, is_qualitative)
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
    if (! is_qualitative)
        $sel.hide();

    $sel.on('change', freq_qual_cb);
    return $sel;
}

function freq_quants_cb(event)
{
    var item = event.target;
    var $par = $($(item).parents("table[name='build_classes']")[0]);
    var sum = 0.0;

    var name = $(item).attr('name');

    if (event.type == 'input') {
        $(item).off('keyup', freq_quants_cb);
    }

    if (event.type == 'change' || event.type == 'input')
        to_be_saved(true);

    $par.find("input[type='text'][name=" + name + "]").each(function(){sum += parseFloat(this.value)});

    if (Math.abs(sum - 1.0) > 1e-6) {
        $par.find("input[type='text'][name=" + name + "]").parent().addClass('warning');
    }
    else {
        $par.find("input[type='text'][name=" + name + "]").parent().removeClass('warning');
    }
}

function freq_quants_create(are_hided)
{
    var $urban_quan, $rural_quan;

    $urban_quan = $('<input>', { 'name': 'urban_quan', 'type': 'text', 'class': 'freq_quan', 'value': '0' });
    $rural_quan = $('<input>', { 'name': 'rural_quan', 'type': 'text', 'class': 'freq_quan', 'value': '0' });

    $urban_quan.on('focus blur input keyup change', freq_quants_cb);
    $rural_quan.on('focus blur input keyup change', freq_quants_cb);

    if (are_hided) {
        $urban_quan.hide();
        $rural_quan.hide();
    }
    return ({'urban': $urban_quan, 'rural': $rural_quan});
}

function build_classes_update(checkbox) {
    var $tree, $leafs, $leaf, line, is_freq_qualitative, build_classes_new = [];
    var i, e, o, $table, $rows, $tr, sep = " | ", descr;
    var $urban_quan, $rural_quan;

    $tree = $(checkbox).parents('div[name="tree"]');
    freq_type = $tree.find("button[name='freq_type']").attr('data-gem-value');
    $leafs = $tree.find("div[name='cascade'] input[type='checkbox']:checked:not(:has(~ div input[type='checkbox']:checked))");

    for (i = 0 ; i < $leafs.length ; i++) {
        $leaf =  $($leafs[i]);
        build_classes_new[i] = [];
        for (e = 0 ; e < 1000 ; e++) {
            build_classes_new[i].push($leaf.attr('name'));
            if ($leaf.parent().attr('data-gem-base') != undefined) {
                break;
            }
            //      cbox-> li->      ul->     div ->   li->                 ->checkbox
            $leaf = $leaf.parent().parent().parent().parent().children('input[type="checkbox"]');
        }
        if (e == 1000) {
            console.log("WARNING: Max iteration number reached 1000"); // not development log, good for production!
        }
    }

    $table = $tree.find("table[name='build_classes']");
    $table_to_clipboard_btn = $tree.find("button[name='table-to-clipboard']");

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
                // console.log(build_classes_new[i][o]);
                if (build_classes_new[i][o] != "Unknown") {
                    descr += (o == (build_classes_new[i].length - 1) ? "" : sep) +
                        __(build_classes_new[i][o]);
                }
            }
            $td = $("<td>", { "text": descr, "class": "path" });
            $tr = $("<tr>", { "name": "path" });
            $tr[0].data_gem_path = build_classes_new[i].slice(0);
            $tr[0].checked = true;

            var $quants = freq_quants_create(freq_type == 'qualitative');
            $urban_quan = $quants['urban'];  $rural_quan = $quants['rural'];

            $tr.append($td,
                       $('<td>').append(
                           frequency_ddown_create('urban', (freq_type == 'qualitative')),
                           $urban_quan
                       ),

                       $('<td>').append(
                           frequency_ddown_create('rural', (freq_type == 'qualitative')),
                           $rural_quan
                       ));
            $table.find("tr[name='titles']").after($tr);
        }
    }

    $table.find("tr[name='path']").each(function () { if(!this.checked) $(this).remove() });

    $urban_quan = $table.find("input[name='urban_quan'][type='text']");
    if (freq_type == 'quantitative' && $urban_quan.length > 0) {
        freq_quants_cb({'target': $urban_quan[0], 'type': 'change'});

        $rural_quan = $table.find("input[name='rural_quan'][type='text']");
        freq_quants_cb({'target': $rural_quan[0], 'type': 'change'});
    }

    if ($table.find("tr[name='path'], tr[name='path-ro']").length > 0) {
        $table.show();
        $table_to_clipboard_btn.show();
    }
    else {
        $table.hide();
        $table_to_clipboard_btn.hide();
    }
}

function checkbox_click_cb() {
    var item = $(this).parent();
    to_be_saved(true);

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

function gem_modal_confirm(obj, title, content, success_cb, error_cb) {
    var $dial;

    $dial = $('<div>', { 'title': title, 'text': content });
    $('body').append($dial);
    var buttons = {}

    buttons[__("yes")] = function() {
        success_cb(obj);
        $(this).dialog("close");
        $dial.remove();
    };
    buttons[__("no")] = function() {
        error_cb(obj);
        $(this).dialog("close");
        $dial.remove();
    };

    $dial.dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: buttons
    });
}

function gem_modal_alert(title, content) {
    var $dial;

    $dial = $('<div>', { 'title': title, 'html': content });
    $('body').append($dial);
    var buttons = {}

    buttons[__("ok")] = function() {
        $(this).dialog("close");
        $dial.remove();
    };

    $dial.dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: buttons
    });
}




function classification_del_cb() {
    var country = $(this).parent().find("p[name='title']").text();

    var success_cb = function(obj) {
        // button-> div-> form
        $(obj).parent().parent().remove();

        to_be_saved(true);

    };

    var error_cb = function(obj) {
    };

    gem_modal_confirm(this, "Delete Classification",
                      __("Do you really want to delete '") + country + __("' classification?"),
                      success_cb, error_cb);
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
    $notes = $tree.find("div[name='notes']");
    $cascade = $tree.find("div[name='cascade']");

    cascade_showhide(to_show, $notes, $cascade, $(this));
}

function occupancies_showhide_cb() {
    var $tree = $(this).parents("div[name='tree']");
    classification_tab_show($tree, 'occupancies');
}

function freq_type_cb() {
    var cur_value = $(this).attr('data-gem-value');
    var sum, $tree, $table;

    $button = $(this);
    $tree = $button.parents("div[name='tree']");
    if (cur_value == 'quantitative') {
        $button.text(__('qualitative frequencies'));
        $button.attr('data-gem-value', 'qualitative');
        $tree.find("table[name='build_classes']").find("select[name='urban'] , select[name='rural']").show();
        $tree.find("table[name='build_classes']").find("select[name='urban'] , select[name='rural']"
                                                      ).parent().removeClass('warning');
        $tree.find("table[name='build_classes']").find("input[name='urban_quan'], input[name='rural_quan']").hide();
    }
    else {
        $button.text(__('quantitative frequencies'));
        $button.attr('data-gem-value', 'quantitative');
        $table = $tree.find("table[name='build_classes']");
        $table.find("select[name='urban'], select[name='rural']").hide();

        $urban_quan = $table.find("input[name='urban_quan'][type='text']");
        $rural_quan = $table.find("input[name='rural_quan'][type='text']");
        $urban_quan.show();
        $rural_quan.show();
        if ($urban_quan.length > 0) {
            freq_quants_cb({'target': $urban_quan[0], 'type': 'change'});
            freq_quants_cb({'target': $rural_quan[0], 'type': 'change'});
        }
    }

    to_be_saved(true);
}

function classification_tab_show($tree, tab_name)
{
    // 'occupancies', 'operational'
    var $occ = $tree.find("div[name='occupancies']");
    var $ope = $tree.find("div[name='operational']");
    var $casc_btn = $tree.find("button[name='cascade_showhide']");
    var $occ_btn = $tree.find("button[name='occupancies_showhide']");
    var $frty_btn = $tree.find("button[name='freq_type']");
    if (tab_name == 'occupancies') {
        $occ.show();
        $ope.hide();
        $casc_btn.hide();
        $occ_btn.hide();
        $frty_btn.hide();
    }
    else if (tab_name == 'operational') {
        $occ.hide();
        $ope.show();
        $casc_btn.show();
        $occ_btn.show();
        $frty_btn.show();
    }
}

function occupancy_cb()
{
    // get the parent td of current occupancy icon/radio button clicked
    var td = $(this).parent();

    // get the radio item related to the current click (in the icon click case)
    if (this.tagName == 'IMG')
        var radio = td.children("input[name='occupancy'][type='radio']");
    else
        var radio = $(this);

    // get all the radio buttons of the same group
    var radios = $(this).parents("table[name='occupancies_mod']").find("input[name='occupancy'][type='radio']");

    // de-highlight all tds
    radios.each(function deselect_radios() { var td = $(this).parent() ; td.removeClass('sel'); });

    // set the current checkbox and hilight relative td
    if (this.tagName == 'IMG')
        radio.prop('checked', true);
    td.addClass('sel');

    to_be_saved(true);
};

function occupancies_item_add(occ_name, is_checked)
{
    var td = $('<td>');
    var cbox = $('<input>', {'type':'radio', 'name': 'occupancy', 'value': occ_name});
    var img = $('<img>', {'src': gem_static_url + '/building-class/img/120/' + occ_name + '.png',
                          'title': __(occ_name)});

    if (is_checked) {
        cbox.prop('checked', true);
        td.addClass('sel');
    }

    cbox.on('click', occupancy_cb);
    img.on('click', occupancy_cb);
    td.append(cbox, img);

    return td;
};

function occupancies_get($tree)
{
    var occupancies = [];

    for (var i = 0 ; i < gem_occupancy_names.length ; i++) {
        if ($tree.find("div[name='occupancies'] input[type='radio'][value='" + gem_occupancy_names[i] + "']"
                     ).is(':checked')) {
            occupancies.push(gem_occupancy_names[i]);
        }
    }

    return occupancies;
}

function occupancies_ro_set(occupancies_ro_ctx, occupancies)
{
    occupancies_ro_ctx.empty();
    for (var i = 0 ; i < occupancies.length ; i++) {
        occ_name = occupancies[i];

        occupancies_ro_ctx.append($('<img>', {'src': gem_static_url + '/building-class/img/60/' + occ_name + '.png',
                                              'title': __(occ_name)}));
    }
}

function occup_next_btn_cb()
{
    var $tree = $(this).parents("div[name='tree']");
    var $table = $tree.find("table[name='occupancies_mod']");
    var $occupancy = $table.find("input[type='radio'][name='occupancy']:checked");

    if ($occupancy.length == 0) {
        gem_modal_alert(__('occupancies'), __('At least one occupancy type must be selected.'));
        return;
    }
    occupancies_ro_set($tree.find("div[name='occupancies_ro_ctx']"), [$occupancy.val()]);

    classification_tab_show($tree, 'operational');
}

function notes_textarea_cb(event) {
    if (event.type == 'change' || event.type == 'input')
        to_be_saved(true);
}

function table_to_clipboard_cb(event) {
    var build_classes = [], bc_out = [];

    var $tree = $(event.target).closest('div.tree');
    var freq_type = $tree.find("button[name='freq_type']").attr('data-gem-value');

    var $bc_rows = $tree.find("table[name='build_classes']").find("tr[name='path']");
    var $bc_rows_ro = $tree.find("table[name='build_classes']").find("tr[name='path-ro']");
    var bc_idx, bc_row, bc_row_ro;

    for (bc_idx = ($bc_rows.length - 1) ; bc_idx >= 0 ; bc_idx--) {
        bc_row = $bc_rows[bc_idx];
        build_classes.push(build_class2obj(bc_row, false));
    }

    for (bc_idx = 0 ; bc_idx < $bc_rows_ro.length ; bc_idx++) {
        bc_row_ro = $bc_rows_ro[bc_idx];
        build_classes.push(build_class2obj(bc_row_ro, false));
    }
    for (bc_idx = 0 ; bc_idx < build_classes.length ; bc_idx++) {
        var bc, row_out = []
        bc = build_classes[build_classes.length -1 - bc_idx];
        row_out[0] = bc.path;
        if (freq_type == 'quantitative') {
            row_out[1] = bc.urban_quan;
            row_out[2] = bc.rural_quan;
        }
        else if (freq_type == 'qualitative') {
            row_out[1] = bc.urban;
            row_out[2] = bc.rural;
        }
        else {
            console.log('unknown type ' + freq_type);
        }
        bc_out.push(row_out);
    }

    copy_to_clipboard(bc_out);
    return;
}

function classification_add(country) {
    var li = [];
    var notes = "";
    var occupancies = [];
    var occupancies_view = true;
    var freq_type = 'qualitative';
    var build_classes = [];
    var show = true;
    var is_table_visible = false;
    var $urban, $rural;
    var $urban_quan, $rural_quan;

    // console.log("CLASSIFICATION ADD");
    if (arguments.length == 6) {
        occupancies = arguments[1];
        notes = arguments[2];
        freq_type = arguments[3];
        build_classes = arguments[4];
        show = arguments[5];
    }

    if (occupancies.length > 0) {
        occupancies_view = false;
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

    var del_btn = $('<button>', {'type': 'button', 'name': 'delete',
                                 'class': 'classification_del', 'text': __('delete') });
    del_btn.on('click', classification_del_cb);
    var cascade_showhide_btn = $('<button>', {'type': 'button', 'name': 'cascade_showhide',
                                              'class': 'cascade_showhide',
                                              'data-gem-show': 'true', 'text': __('hide') });
    cascade_showhide_btn.on('click', cascade_showhide_cb);
    if (occupancies_view)
        cascade_showhide_btn.hide();

    var occupancies_showhide_btn =  $('<button>', {'type': 'button', 'name': 'occupancies_showhide',
                                                   'class': 'occupancies_showhide',
                                                   'data-gem-show': 'true', 'text': __('occupancies') });
    occupancies_showhide_btn.on('click', occupancies_showhide_cb);
    if (occupancies_view)
        occupancies_showhide_btn.hide();

    var freq_type_btn =  $('<button>', {'type': 'button', 'name': 'freq_type', 'class': 'freq_type',
                                        'data-gem-value': freq_type, 'text': __(
                                            (freq_type == 'qualitative' ? 'qualitative frequencies' :
                                             'quantitative frequencies') ) });
    freq_type_btn.on('click', freq_type_cb);
    if (occupancies_view)
        freq_type_btn.hide()

    var $table = $("<table>", {"name": "build_classes", "class": "build_classes"}).append(
        $("<tr>", {"name": "titles"}).append($("<th>", {"text": __("building type")}),
                                             $("<th>", {"text": __("urban") }),
                                             $("<th>", {"text": __("rural") }))
    );
    var $table_to_clipboard_btn = $("<button>", {"name": "table-to-clipboard", "type": "button",
                                                 "class": "table_to_clipboard",
                                                 "text": "Copy to Clipboard as CSV"});
    $table_to_clipboard_btn.click(table_to_clipboard_cb);

    if (build_classes.length == 0) {
        $table.hide();
        $table_to_clipboard_btn.hide();
    }

    var occupancies_tab = $('<table>', {'name': 'occupancies_mod', 'class': 'occupancies_mod'});
    var tr = null;
    for (var i = 0 ; i < 6 ; i++) {
        if (i == 0 || i == 3) {
            tr = $('<tr>');
        }
        tr.append(occupancies_item_add(gem_occupancy_names[i],
                                       (occupancies.indexOf(gem_occupancy_names[i]) != -1)));
        if (i == 2 || i == 5) {
            occupancies_tab.append(tr);
        }
    }

    occupancies_div = $('<div>', {'name': 'occupancies'});
    occup_next_btn = $('<button>', {'type': 'button', 'name': 'next', 'class': 'occup_next_btn', 'text': __('next') });
    occup_next_btn.on('click', occup_next_btn_cb);

    occupancies_div.append($('<p>', {'name': 'occupancies_descr',
                                     'text': __('What type of building occupancy will you characterise ?')}),
                           occupancies_tab,
                           $('<div>').append(occup_next_btn));

    if (! occupancies_view)
        occupancies_div.hide();

    var occupancies_ro_ctx = $('<div>', {'name': 'occupancies_ro_ctx', 'class': 'occupancies_ro_ctx'});

    occupancies_ro_set(occupancies_ro_ctx, occupancies);
    var $notes_textarea = $('<textarea>', {'name': 'notes', 'maxlength': '1024',
                                          'class': 'classification_notes', 'value': notes});
    $notes_textarea.on('focus blur input keyup change', notes_textarea_cb);

    var operational_div = $('<div>', {'name': 'operational'}).append(
        $('<div>', { 'name': 'occupancies_ro', 'class': 'occupancies_ro'}).append(
            $('<p>', {'class': 'classification_occupancy', 'text': __('occupancy')}),
            occupancies_ro_ctx
        ),
        $('<div>', { 'name': 'notes', 'class': 'notes'}).append(
            $('<p>', {'class': 'classification_notes', 'text': __('notes')}),
            $('<p>', {'class': 'classification_notes'}).append(
            $notes_textarea)
        ),
        $('<div>', {'name': 'cascade'}).append(
            $('<p>', {'name': 'descr', 'class': 'sub-title',
                      'text': __('Material')}),
            $("<ul>").append(li)),
        $table, $table_to_clipboard_btn);
    if (occupancies_view)
        operational_div.hide();

    $tree = $("<div>", {'name': 'tree', 'class': 'tree', 'data-gem-country': country}).append(
        $('<p>', {'name': 'title', 'data-gem-country': country,
                  'class': 'classification_title', 'text': __(country)}),
        $('<p>', {'name': 'to-be-saved', 'class': 'to_be_saved', 'style': 'display: none;', 'text': __('(modified)')}),
        del_btn, occupancies_showhide_btn, cascade_showhide_btn, freq_type_btn,
        occupancies_div, operational_div
    );

    $notes = $tree.find("div[name='notes']");
    $cascade = $tree.find("div[name='cascade']");

    cascade_showhide(show, $notes, $cascade, cascade_showhide_btn);

    var $form = $('<form>').append($tree);
    if (arguments.length == 1)
        $("div#forest").prepend($form);
    else
        $("div#forest").append($form);

    for (var i = 0 ; i < build_classes.length ; i++) {
        var build_class = build_classes[i];
        var atoms = build_class.path.split('|');
        var atom, $ul, $li, $cbox;

        $ul = $cascade.children("ul");
        var not_found = false;
        var tr_created = false;
        var click_revert = [];

        for (var e = atoms.length - 1 ; e >= 0 ; e--) {
            atom = atoms[e];
            $li = $ul.children("li[name='node'][data-gem-id='" + atom + "']");
            if ($li.length == 0) {
                not_found = true;
                if (tr_created) {
                    $table.find("tr[name='path']").first().remove();
                }
                break;
            }
            $cbox = $li.children("input[type='checkbox'][name='" + atom + "']");
            if (! $cbox.is(':checked')) {
                click_revert.push($cbox);
                $cbox.prop('checked', true).triggerHandler('click');
                tr_created = true;
            }
            $ul = $li.children("div[name='sub']").children("ul");
        }
        if (not_found) {
            var sep = ' | ';
            for (var e = (click_revert.length - 1) ; e >= 0 ; e--) {
                click_revert[e].prop('checked', false).triggerHandler('click');
            }
            // build_classes_new[i] not already exists in the table, create it
            var descr_txt = "";
            var legacy = $("<span>", {"class": 'legacy', 'text': __('LEGACY (Vers.') +
                                      build_class['vers'] + __(')')});
            for (o = (atoms.length - 1) ; o >= 0 ; o--) {
                atom = atoms[o];

                // console.log(build_classes_new[i][o]);
                if (atom != "Unknown") {
                    descr_txt += (o == (atoms.length - 1) ? "" : sep) +
                        __(atom);
                }
            }
            $td = $("<td>", { "class": "path" });
            $td.append($('<span>', { 'text': descr_txt }), legacy);
            $tr = $("<tr>", { "name": "path-ro" });
            $tr[0].data_gem_path = atoms.slice(0);
            $tr[0].checked = true;
            $urban = frequency_ddown_create('urban', (freq_type == 'qualitative'));
            $rural = frequency_ddown_create('rural', (freq_type == 'qualitative'));

            var $quants = freq_quants_create(freq_type == 'qualitative');
            $urban_quan = $quants['urban'];  $rural_quan = $quants['rural'];

            $tr.append($td,
                       $('<td>').append($urban, $urban_quan),
                       $('<td>').append($rural, $rural_quan));
            $table.append($tr);
        }
        else {
            $tr = $table.find("tr[name='path']").first();
            $urban = $tr.find("select[name='urban']");
            $rural = $tr.find("select[name='rural']");
        }
        $tr.find("select[name='urban']").val(build_class.urban);
        $tr.find("select[name='rural']").val(build_class.rural);
        $urban_quan = $tr.find("input[name='urban_quan'][type='text']");
        $urban_quan.val(build_class.urban_quan);

        $rural_quan = $tr.find("input[name='rural_quan'][type='text']");
        $rural_quan.val(build_class.rural_quan);
        is_table_visible = true;
    }

    $urban_quan = $table.find("input[name='urban_quan'][type='text']");
    if (freq_type == 'quantitative' && $urban_quan.length > 0) {
        $rural_quan = $table.find("input[name='rural_quan'][type='text']");
        freq_quants_cb({'target': $urban_quan[0], 'type': 'change'});
        freq_quants_cb({'target': $rural_quan[0], 'type': 'change'});
    }

    if (is_table_visible) {
        $table.show();
        $table_to_clipboard_btn.show();
    }


    $("button[name='save']").show();
}

function classification_add_cb(event) {
    var country = $("select#country-id").val();

    classification_add(country);
    to_be_saved(true);
}

function build_class2obj(bc_row, is_reverse_path)
{
    var obj = { path: "", urban: "", urban_quan: "", rural: "", rural_quan: ""};
    var path = bc_row.data_gem_path;

    if (is_reverse_path == true) {
        for (var i = 0 ; i < path.length ; i++) {
            obj.path += (i == 0 ? "" : "|") + path[i];
        }
    }
    else {
        for (var i = path.length - 1 ; i >= 0 ; i--) {
            obj.path += (i == path.length - 1 ? "" : "|") + path[i];
        }
    }
    obj.urban = $(bc_row).find("select[name='urban']").val();
    obj.urban_quan = $(bc_row).find("input[name='urban_quan'][type='text']").val();
    obj.rural = $(bc_row).find("select[name='rural']").val();
    obj.rural_quan = $(bc_row).find("input[name='rural_quan'][type='text']").val();

    return obj;
}

function tree2obj(idx, tree)
{
    var $tree = $(tree);
    var obj = { country: "", notes: "", build_classes: [] };
    var $bc_rows = $tree.find("table[name='build_classes']").find("tr[name='path']");
    var $bc_rows_ro = $tree.find("table[name='build_classes']").find("tr[name='path-ro']");
    var bc_idx, bc_row, bc_row_ro;

    obj.country = $tree.find("p[name='title']").attr("data-gem-country");
    obj.freq_type = $tree.find("button[name='freq_type']").attr('data-gem-value');
    obj.occupancies = occupancies_get($tree);
    obj.notes = $tree.find("textarea[name='notes']").val();

    for (bc_idx = ($bc_rows.length - 1) ; bc_idx >= 0 ; bc_idx--) {
        bc_row = $bc_rows[bc_idx];
        obj.build_classes.push(build_class2obj(bc_row, true));
    }

    for (bc_idx = 0 ; bc_idx < $bc_rows_ro.length ; bc_idx++) {
        bc_row_ro = $bc_rows_ro[bc_idx];
        obj.build_classes.push(build_class2obj(bc_row_ro, true));
    }

    return obj;
}

function save_resp_clean()
{
    var $save_risp = $("div[name='save_resp']");
    $save_risp.html("<br>");
    $save_risp.removeClass();
}

function save_cb(event)
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
            to_be_saved(false);
            var $save_risp = $("div[name='save_resp']");
            $save_risp.html(resp.ret_s.replace(/\n/g, "<br>"));
            if (resp.ret == 0)
                $save_risp.addClass("save_resp_ok");
            else
                $save_risp.addClass("save_resp_err");
            setTimeout(save_resp_clean, 3000);
        },
        error: function (response) {
            var $save_risp = $("div[name='save_resp']");

            $save_risp.html(resp.ret_s.replace(/\n/g, "<br>"));
            if (resp.ret == 0)
                $save_risp.addClass("save_resp_ok");
            else
                $save_risp.addClass("save_resp_err");
            setTimeout(save_resp_clean, 10000);
        },
    });

}

function user_settings_cb()
{
    window.location.href = 'user-settings';
}

$(document).ready(function building_class_main() {
    gem_bcs_to_init_phase = true;
    // gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-classification').on('click', classification_add_cb);
    $('button#user-settings').on('click', user_settings_cb);
    $('select#language-id').on('change', language_change_cb);
    $("button[name='save']").on('click', save_cb);
    lang_update();

    for (var i = 0 ; i < gem_bcs_classifications.length ; i++) {
        var classification = gem_bcs_classifications[i];
        classification_add(classification.country, classification.occupancies, classification.notes,
                           classification.freq_type, classification.build_classes, false);
    }
    gem_bcs_to_init_phase = false;
})

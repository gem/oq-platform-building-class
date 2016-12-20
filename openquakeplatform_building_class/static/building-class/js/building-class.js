/*
  TODO:

  DONE - remove countries blocks
  - insert new as first
  - disclaimer
  - countries
  - styling

  - produce tables with flat version and dropdown with frequencies for Urban and Rural

  - hide trees
  - delete entire country block
  - recursive unclick require confirm
  - complete tree description import

  NEXT ITERATION:
  - digest mail with new entries
  - admin view

*/

var gem_bcs_transl = {};
var gem_bcs_transl_id = "en";

var gem_bcs_flatten = [];

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
    $grp.append($('<p>', { 'text': model.sub.name }));
    $ul = $('<ul>');

    for (i in model.sub.el) {
        var checkbox = $('<input>', {'type': 'checkbox', 'name': model.sub.el[i].name});
        checkbox[0].data_gem_model = model.sub.el[i];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': model.sub.el[i].name}).append(
            checkbox, $("<span>", {'name': 'descr', 'text': __(model.sub.el[i].name)})));
    }
    $(item).append($grp.append($ul.append(li)));
}

function flatter_update(checkbox) {
    var $tree, $leafs, $leaf, line, flatter = [];

    $tree = $(checkbox).parents('div[name="tree"]');
    $leafs = $tree.find('input[type="checkbox"]:checked:not(:has(~ div input[type="checkbox"]:checked))');

    for (var i = 0 ; i < $leafs.length ; i++) {
        $leaf =  $($leafs[i]);
        flatter[i] = [];
        do {
            flatter[i].push($leaf.attr('name'));
            if ($leaf.parent().attr('data-gem-base') != undefined) {
                break;
            }
            $leaf = $leaf.parent().parent().parent().parent().children('input[type="checkbox"]');
        } while (true);
    }
    console.log(flatter);

    // remove from flatter row already present in gem_bcs_flatten
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
    flatter_update(this);
}

function country_del_cb() {
    var nation = $(this).parent().find("p[name='title']").text();
    if (confirm(__("Do you really want to delete '" + nation + "' classification?"))) {
        $(this).parent().remove();
    }
}

function country_add_cb() {
    var nation, li = [];

    nation = $("select#nation-id").val();

    var material = ['masonry', 'concrete', 'steel', 'composite', 'wood'];
    for (k in material) {
        var checkbox = $('<input>', {'type': 'checkbox', name: material[k]});
        checkbox[0].data_gem_model = gem_bcs_tree_descr[material[k]];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': material[k],
                           'data-gem-base': 'true'}).append(
            checkbox, $("<span>", {'name': 'descr', 'class': 'gem_capitalize',
                                   'text': __(material[k])})));
    }

    var del_btn = $('<button>', {'name': 'delete', 'class': 'country_del', 'text': __('delete') });
    del_btn.on('click', country_del_cb);
    $("div#forest").append(
        $("<div>", {'name': 'tree', 'class': 'tree', 'data-gem-nation': nation}).append(
            $('<p>', {'name': 'title', 'data-gem-nation': nation,
                      'class': 'country_title', 'text': __(nation)}), del_btn,
            $('<p>', {'class': 'country_notes', 'text': __('notes')}),
            $('<p>', {'class': 'country_notes'}).append(
                $('<textarea>', {'name': 'notes', 'maxlength': '1024',
                              'class': 'country_notes'})),
            $('<span>', {'name': 'descr', 'class': 'gem_capitalize',
                         'text': __('material')}),
            $("<ul>").append(li),
            $("<table>", {"name": "flatted"})
        )
    );
}

$(document).ready(function building_class_main() {
    gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-nation').on('click', country_add_cb);
    $('select#language-id').on('change', language_change_cb);
    lang_update();
})

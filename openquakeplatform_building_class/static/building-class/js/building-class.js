/*
  TODO:

  - disclaimer
  - remove countries blocks
  - countries
  - styling


    gem_bcs_tree_descr['masonry'] = 
    {"type": "group", "name": "", "el": [
      {"type": "choice", "name": "MASONRY", "sub":

*/

var gem_bcs_transl = {};
var gem_bcs_transl_id = "en";

function __(id) {
    try {
        var tra = gem_bcs_transl[gem_bcs_transl_id][id];
        if (tra == undefined)
            return id;
        else
            return tra;
    } catch(err) {
        return id;
    }
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
    console.log('choices_create: begin');
    console.log('Name: ' + model.sub.name);
    console.log(model.sub.el.length);
    for (i in model.sub.el) {
        console.log(model.sub.el[i].name);
    }
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

function checkbox_click_cb() {
    var item = $(this).parent();
    if (this.checked) {
        var model = this.data_gem_model;
        console.log(model['type']);
        var choices;

        var sub = $(item).children('div[name="sub"]');
        if (sub.length == 0) {
            // create a sub object with choices
            choices = choices_create(item, model);
        }
        else {
            sub.show();
        }
        console.log(model);
    }
    else { // try to hide subgroup (if no other sub checkbox are checked)
        var checked = $(item).find('input[type="checkbox"]:checked');
        console.log(checked.length);
        if (checked.length == 0) {
            var sub = $(item).children('div[name="sub"]');
            sub.hide();
        }
        else {
            alert('Uncheck all sub-items before it');
            return false;
        }
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

        li.push($("<li>", {'name': 'node', 'data-gem-id': material[k]}).append(
            checkbox, $("<span>", {'name': 'descr', 'class': 'gem_capitalize',
                                   'text': __(material[k])})));
    }

    $("div#forest").append(
        $("<div>", {'name': 'tree', 'data-gem-nation': nation}).append(
            $('<p>', {'name': 'title', 'data-gem-nation': nation,
                      'class': 'country_title', 'text': __(nation)}),
            $('<span>', {'name': 'descr', 'class': 'gem_capitalize',
                         'text': __('material')}),
            $("<ul>").append(li)
        )
    );
}

$(document).ready(function building_class_main() {
    gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-nation').on('click', country_add_cb);
    $('select#language-id').on('change', language_change_cb);
    lang_update();
})

/*
  TODO:

  - disclaimer
  - remove countries blocks
  - styling
  - internationalization
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
    var $cntx = $(this).contents();

    $cntx[$cntx.length - 1].nodeValue = __(node_id);
}

function tree_lang_update(index)
{
    var tit = $(this).find('p[name="title"]')[0];
    $(tit).text(__($(tit).attr('data-gem-nation')));
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


function country_add_cb() {
    var nation, li = [];

    nation = $("select#nation-id").val();

    // xxxxx
    var material = ['masonry', 'concrete', 'steel', 'composite', 'wood'];
    for (k in material) {
        li.push($("<li>", {'name': 'node', 'data-gem-id': material[k]}).append(
            $('<input>', {'type': 'checkbox', name: material[k]}),
            __(material[k]))
               );
    }

    $("div#forest").append(
        $("<div>", {'name': 'tree', 'data-gem-nation': nation}).append(
            $('<p>', {'name': 'title', 'data-gem-nation': nation,
                      'class': 'country_title', 'text': __(nation)}),
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

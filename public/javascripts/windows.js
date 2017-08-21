/**
 * Created by kmell on 6/28/2017.
 */


$('#Search').dialog({
    resizable: false,
    autoOpen: false,
    modal: true,
    width: 400,
    height: 150
});

$('#Years').selectmenu();

$('#SelectYear').button();

$('#ChangeLog').dialog({
    resizable: false,
    autoOpen: false,
    modal: true,
    width: 400,
    height: 'auto'
});

$('#ChangeLogClose').button();
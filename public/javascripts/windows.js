/**
 * Created by kmell on 6/28/2017.
 */


$('#Search').dialog({
    resizable: false,
    autoOpen: false,
    modal: true,
    width: 410,
    height: 'auto'
});

$('#Years').selectmenu();

$('#SelectYear').button();

$('#ChangeLog').dialog({
    resizable: false,
    autoOpen: false,
    modal: true,
    width: 410,
    height: 'auto'
});

$('#ChangeLogClose').button();

$('#About').dialog({
    resizable: false,
    autoOpen: false,
    modal: true,
    width: 410,
    height: 'auto'
});

$('#AboutButton').button();
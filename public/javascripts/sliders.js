var handle = $( "#custom-handle" );
$( "#NumSel" ).slider({
    value: 2,
    min: 2,
    max: 10,
    step: 1,
    create: function() {
        handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
        handle.text( ui.value );
    }
});
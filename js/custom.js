/**
 * Custom JQuery functions.
 */

 //CODIGO CALCULADORA
$(document).ready(function() {    


    //##### DATEPICKERS #######
    $('.datepicker').datepicker({
        format: "mm/dd/yyyy",
		autoclose: true
	});
	
	//##### TABLE SEARCH #######
	$('#tblOrders').DataTable();
	
	//##### MODALS #############
	$('#btn-modal-cuc').click(function(){
		$( "#modal-body" ).html( "Cargando..." );
		$.get( "/popup.asp?t=WhatIsCUC", function( data ) {
			$( "#modal-body" ).html( data );
		}); 
	});

	$('#btn-modal-pay').click(function(){
		$( "#modal-body" ).html( "Cargando..." );
		$.get( "/popup.asp?t=DeliveryTimePolicy", function( data ) {
			$( "#modal-body" ).html( data );
		});
	});
	
	$('#link-delivery-policy').click(function(){
		$( "#modal-body" ).html( "Cargando..." );
		$.get( "/popup.asp?t=DeliveryTimePolicy", function( data ) {
			$( "#modal-body" ).html( data );
		});
	});
	
	$('#link-cash-ways').click(function(){
		$( "#modal-body" ).html( "Cargando..." );
		$.get( "/popup.asp?t=MoreAboutDepositWay", function( data ) {
			$( "#modal-body" ).html( data );
		});
	});
	
	//TABLE ORDERS RESPONSIVE

    //CellRecharge

    function show_hide_desc (){
         //Primero oculto todos los demas
         $(".desc").each(function() {
          var id = $( this ).attr( "id" );
          $('#' + id).hide();
        }); 
        //Enseño la descripcion del option seleccionado     
        var id_show = $('select[name=cbservicesoption]').val();
        $('#' + id_show).show();
    }

    show_hide_desc();

    $("#cbservicesoption").change(function () {
         show_hide_desc();       
    });
	
});
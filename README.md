# Regiones-ComunasChile
Con el poder de jQuery y mucho cafe!

# Como se ocupa? 

Sumamente sencillo de ocupar, lo primero eso si es que necesitaremos de dos controles (select) en tu html para poder identificarlos
y aplicar la magia. 

´´´<div class="form-group row">
    <label for="slcRegion" class="col-4 col-form-label">Región</label> 
    <div class="col-8">
      <select id="slcRegion" name="slcRegion" required="required" class="custom-select">
        <option value="">Seleccione una opción</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="slcComuna" class="col-4 col-form-label">Comuna</label> 
    <div class="col-8">
      <select id="slcComuna" name="slcComuna" class="custom-select" required="required">
        <option value="">Seleccione una opción</option>
      </select>
    </div>
  </div>´´´ 
  
# ya y luego que hago? 
Pues debes llamar a nuestro archivo .js en tu html, para eso solo si quieres copia y pega esto,
pero recuerda un gran poder conlleva una gran responsabilidad por lo que debes asegurar 
de que los controles (select) esten con su id correcto 

´´´
jQuery(document).ready(function() {
        jQuery('#slcRegion').geoRegionalizacion({
            regionDependiente: '#slcComuna'
        });
});
´´´

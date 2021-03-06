Oskari.registerLocalization(
{
    "lang": "es",
    "key": "StatsGrid",
    "value": {
        "title": "Patio",
        "desc": "",
        "tile": {
            "title": "Mapas temáticos"
        },
        "view": {
            "title": "Patio",
            "message": "patiopoc"
        },
        "dataProviderInfoTitle": "Indicadores",
        "layertools": {
            "table_icon": {
                "tooltip": "Ir a mapas temáticos",
                "title": "Mapas temáticos"
            },
            "diagram_icon": {
                "tooltip": "Mostrar diagrama",
                "title": "Diagrama"
            },
            "statistics": {
                "tooltip": "yendo a mapas temáticos",
                "title": "Estadísticas"
            }
        },
        "tab": {
            "title": "Indicadores",
            "description": "Indicadores propios",
            "grid": {
                "name": "Título",
                "description": "Descripción",
                "organization": "Fuente de datos",
                "year": "Año",
                "delete": "Borrar"
            },
            "deleteTitle": "Borrar indicador",
            "destroyIndicator": "Borrar",
            "cancelDelete": "Cancelar",
            "confirmDelete": "Está seguro de que desea borrar el indicador",
            "newIndicator": "Indicador nuevo",
            "error": {
                "title": "Error",
                "indicatorsError": "Apareció un error mientras se cargaban los indicadores. Por favor, inténtelo más tarde",
                "indicatorError": "Apareció un error mientras se cargaba un indicador. Por favor, inténtelo más tarde",
                "indicatorDeleteError": "Apareció un error mientras se borraba un indicador. Por favor, inténtelo más tarde"
            }
        },
        "gender": "Género",
        "genders": {
            "male": "hombre",
            "female": "mujer",
            "total": "total"
        },
        "addColumn": "Obtener datos",
        "removeColumn": "Quitar",
        "indicators": "Indicador",
        "cannotDisplayIndicator": "No hay valores del indicador para la clasificación regional seleccionada. Por eso, no se puede mostrar",
        "availableRegions": "Se han encontrado valores para las siguientes clasificaciones regionales:",
        "year": "Año",
        "buttons": {
            "ok": "Hecho",
            "cancel": "Cancelar",
            "filter": "Filtro"
        },
        "stats": {
            "municipality": "Municipio",
            "code": "Código",
            "errorTitle": "Error",
            "regionDataError": "No se han podido encontrar los datos municipales. Por favor, inténtelo más tarde",
            "regionDataXHRError": "No se ha podido cargar el indicador Por favor, inténtelo más tarde",
            "indicatorsDataError": "No se ha podido encontrar el indicador. Por favor, inténtelo más tarde",
            "indicatorsDataXHRError": "No se ha podido cargar el indicador. Por favor, inténtelo más tarde",
            "indicatorMetaError": "No se han encontrado los metadatos del indicador. Por favor, inténtelo más tarde",
            "indicatorMetaXHRError": "No se ha podido cargar el indicador. Por favor, inténtelo más tarde",
            "indicatorDataError": "No se han encontrado datos del indicador. Por favor, inténtelo más tarde",
            "indicatorDataXHRError": "No se podido cargar el indicador. Por favor, inténtelo más tarde",
            "descriptionTitle": "Descripción.",
            "sourceTitle": "Fuente de datos"
        },
        "classify": {
            "classify": "Clasificación",
            "classifymethod": "Método de clasificación",
            "classes": "Clases",
            "jenks": "Separaciones naturales",
            "quantile": "Cuantiles",
            "eqinterval": "Intervalos iguales",
            "manual": "Clases propias",
            "manualPlaceholder": "Números de entrada separados por coma",
            "manualRangeError": "Las separaciones de las clases deben ser números entre {min} y {máx}. Los números de entrada se separan por comas. Los decimales se separan con puntos.",
            "nanError": "El valor dado no es un número. Las clases de entrada se separan de nuevo como números separados por una coma. Los decimales se separan con un punto.",
            "infoTitle": "Clases propias",
            "info": "Introduzca las separaciones de clase de nuevo como números separados por comas. Los decimales se separan con puntos. Por ejemplo introduciendo «0, 10.5, 24, 30.2, 57, 73.1» se obtienen cinco clases que tienen valores entre  «0-10,5», «10,5-24», «24-30,2», «30,2-57» y «57-73,1».Los valores del indicador más pequeños que el valor mínimo (0) o más grandes que el valor máximo (73,1) no se muestran en el mapa. Las divisiones de clases deben ser números entre {min} y {máx}.",
            "mode": "Separaciones de clases",
            "modes": {
                "distinct": "Continuo",
                "discontinuous": "Discreto"
            }
        },
        "colorset": {
            "button": "Colores",
            "flipButton": "Voltear colores",
            "themeselection": "Selección del color del tema",
            "setselection": "Selención del conjunto de colores",
            "sequential": "Cuantitativa",
            "qualitative": "Cualitativa",
            "divergent": "Divisible",
            "info2": "Selecciona los colores pulsando el grupo de color",
            "cancel": "Cancelar"
        },
        "statistic": {
            "title": "Variables estadísticas",
            "avg": "Media",
            "max": "Valor máximo",
            "mde": "Modo",
            "mdn": "Mediana",
            "min": "Valor mínimo",
            "std": "Desviación estándar",
            "sum": "Suma",
            "tooltip": {
                "avg": "Valor medio de los valores del indicador",
                "max": "Valor mayor de de los valores del indicador",
                "mde": "Valor más común de los valores del indicador",
                "mdn": "Valor medio de los valores del indicador despues de ser clasificados por el indicador",
                "min": "Valor más pequeño de los valores del indicador.",
                "std": "Desviación estándar de los valores del indicador.",
                "sum": "Suma total de los valores del indicador"
            }
        },
        "baseInfoTitle": "Datos de identificación",
        "dataTitle": "Indicador",
        "noIndicatorData": "No puede mostrarse el indicador en esta clasificación regional",
        "values": "valores",
        "included": "Valores",
        "municipality": "Municipios",
        "selectRows": "Selecciona filas",
        "select4Municipalities": "Selecciona al menos dos áreas.",
        "showSelected": "Muestra sólo las áreas seleccionadas sobre la malla",
        "not_included": "No incluida.",
        "noMatch": "No se han encontrado resultados",
        "selectIndicator": "Seleccione un indicador",
        "noDataSource": "No se ha encontrado ninguna fuente de datos",
        "selectDataSource": "Seleccione un recurso de datos",
        "filterTitle": "Filtre los valores",
        "indicatorFilterDesc": "Se destacan en la mmala unidades estadísticas seleccionadas. Puede filtrar cada columna de manera separada.",
        "filterIndicator": "Indicador:",
        "filterCondition": "Condición:",
        "filterSelectCondition": "Selecciona condición:",
        "filterGT": "Mayor que (>)",
        "filterGTOE": "Mayor o igual que (>=)",
        "filterE": "Igual (=)",
        "filterLTOE": "Menor igual que (<=)",
        "filterLT": "Menor que (<)",
        "filterBetween": "entre (exclusivamente)",
        "filter": "Filtro",
        "filterByValue": "Por valor",
        "filterByRegion": "Por Región",
        "selectRegionCategory": "Clasificación regional:",
        "regionCatPlaceholder": "Seleccione una clasificación regional:",
        "selectRegion": "Región:",
        "chosenRegionText": "Seleccione las regiones:",
        "noRegionFound": "No se puede encontrar la región",
        "regionCategories": {
            "title": "Clasificaciones regionales",
            "ERVA": "Área ERVA (Área de especial responsabilidad)",
            "ELY-KESKUS": "Centro ELY (Centro para el desarrollo económico, Transporte y Medio Ambiente)",
            "KUNTA": "Municipio",
            "ALUEHALLINTOVIRASTO": "Agencia Administrativa de Estados Regionales",
            "MAAKUNTA": "Región",
            "NUTS1": "Tierra firme de Finlandia y Åland",
            "SAIRAANHOITOPIIRI": "Distrito de hospital",
            "SEUTUKUNTA": "Subregión",
            "SUURALUE": "Región mayor"
        },
        "addDataButton": "Añadir indicador",
        "addDataTitle": "Añadir un nuevo indicador",
        "openImportDialogTip": "Importar datos del portapapeles",
        "openImportDataButton": "Importar datos",
        "addDataMetaTitle": "Título",
        "addDataMetaTitlePH": "Título de los nindicadores",
        "addDataMetaSources": "Fuente de datos",
        "addDataMetaSourcesPH": "Fuente de datos para el indicador",
        "addDataMetaDescription": "Descripción",
        "addDataMetaDescriptionPH": "Descripción",
        "addDataMetaReferenceLayer": "Clasificación regional",
        "addDataMetaYear": "Año",
        "addDataMetaYearPH": "Los datos se han producido en el año",
        "addDataMetaPublicity": "Publicable",
        "municipalityHeader": "Municipio",
        "dataRows": "Valores del indicador por regiones",
        "municipalityPlaceHolder": "Dar valor",
        "formEmpty": "Limpiar",
        "formCancel": "Cancelar",
        "formSubmit": "Entregar",
        "cancelButton": "Cancelar",
        "clearImportDataButton": "Limpiar las filas de datos",
        "importDataButton": "Añadir",
        "popupTitle": "Importar datos",
        "importDataDescription": "Copiar las regiones (nombre o identificador) y los valores correspondientes al área de texto de abajo. Introduzca la región y su valor separados con un tabulador, dos puntos o una coma. Introduzca todas las regiones en filas por separado. \r\nEjemplo 1: Alajärvi, 1234 \r\nEjemplo 2: 009   2100",
        "failedSubmit": "Añadir metadatos para el indicador",
        "connectionProblem": "Puede que no se hayan guardado los datos dados por problemas de conexión",
        "parsedDataInfo": "La cantidad total de regiones importadas",
        "parsedDataUnrecognized": "Regiones desconocidas",
        "loginToSaveIndicator": "Para poder guardar su propio indicador, tiene que entrar"
    }
});

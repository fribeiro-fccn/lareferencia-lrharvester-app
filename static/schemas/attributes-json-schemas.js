/* 
 *  This is the default license template.
 *  
 *  File: attributes-json-schemas.js
 *  Author: lmatas
 *  Copyright (c) 2022 lmatas
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

angular.module('attributes.json.schemas', []).service('JSONAttributesSchemas', function() {

  var _PROFILES = [

  {
                  name : "LaReferencia Profile",
                  className: "org.lareferencia.backend.network.LAReferenciaNetworkAttributes",
                  form: [
                	  { "type": "help", "helpvalue": "<div class=\"alert alert-info\">Aqui se especifican los datos detallados del perfil de repositorio.</div>"},	
                	  
                          { type: "submit", title: "Guardar cambios" },
                           {
                        "type": "tabs",
                        "tabs": [
                          {
                            "title": "Datos principales",
                            "items": [
                                    "institution_type",
                                    "institution_url",
                                    "repository_type",
                                    "repository_url",
                                    "oai_url",
                                    "lastname_firstname_responsible",
                                    "responsible_charge",
                                    "contact_email",
                                    "country",
                                    "city",
                                    "phone",
                                    "software",
                                    "journal_title",
                                    "doi",
                                    "issn",
                                    "issn_l",
                                    "repository_id",
                            ]
                          },
                        ]
                      },
                      { type: "submit", title: "Guardar cambios" }
                      ],
                  schema: {
                          type: "object",
                              properties: {
                                  institution_type: {type: "string", default: "", title: "Tipo de institución", "enum": ["Privada", "Gobierno", "ONG", "Universidad"]},
                                  institution_url: {type: "string", default: "", title: "URL de la institución"},
                                  repository_type:{ type: "string", default: "", title: "Tipo de repositorio", "enum": ["Institucional", "Temático", "Portal de revistas"]},
                                  repository_url:{ type: "string", default: "", title: "URL del repositorio"},
                                  oai_url:{ type: "string", default: "", title: "URL OAI"},
                                  lastname_firstname_responsible:{ type: "string", default: "", title: "Apellido y nombre del responsable"},
                                  responsible_charge:{ type: "string", default: "", title: "Cargo del responsable"},
                                  contact_email: {type: "string", default: "", title: "E-mail de contacto"},
                                  country:{ type: "string", default: "", title: "País", "enum": [ "Argentina", "Brasil", "Chile", "Colombia", "Costa Rica", "Ecuador", "El Salvador", "México", "Panamá",
"Perú"]},
                                  city:{ type: "string", default: "", title: "Ciudad"},
                                  phone:{ type: "string", default: "", title: "Teléfono"},
                                  software:{ type: "string", default: "", title: "Software", "enum": ["DSpace", "Greenstone", "Eprints", "OJS", "Otro"]},
                                  journal_title: {type: "string", default: "", title: "Título de la revista"},
                                  doi:{ type: "string", default: "", title: "Digital Object Identifier (DOI)"},
                                  issn:{ type: "string", default: "", title: "ISSN"},
                                  issn_l:{ type: "string", default: "", title: "ISSN-L"},
                                  repository_id:{ type: "string", default: "", title: "ID del repositorio"},
                              }
                          } /* fin schema */
  }, /** fin de profile */
]; // ***** fin de _PROFILES ******///


  /** mapeo de las definiciones de reglas a un objeto * */
var profiles_defs_by_class = {};


  $.map( _PROFILES, function(profile, i ) { profiles_defs_by_class[profile.className] = profile; });

  /** export del objeto con las definiciones de reglas * */
  this.profileDefinitionByClassName = profiles_defs_by_class;
  this.profileDefinitionList = _PROFILES;
});
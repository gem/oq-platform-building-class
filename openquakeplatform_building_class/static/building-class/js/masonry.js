gem_bcs_tree_descr['concrete'] = gem_bcs_tree_descr['steel'] = 
    gem_bcs_tree_descr['composite'] = gem_bcs_tree_descr['wood'] = 
    gem_bcs_tree_descr['masonry'] = 
      {"type": "choice", "name": "Masonry", "sub":
        {"type": "group", "name": "Type", "el": [
          {"type": "choice", "name": "Confined", "sub":
            {"type": "group", "name": "Type of block ", "el": [
              {"type": "choice", "name": "Ceramic brick", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Concrete block", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Stone", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Percentage of walls", "el": [
                      {"type": "choice", "name": "High percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Low percentage of walls", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
            ]}
          }
         ,{"type": "choice", "name": "Reinforced", "sub":
            {"type": "group", "name": "Type of block ", "el": [
              {"type": "choice", "name": "Adobe", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Ceramic brick", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Concrete block", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Fieldstone", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Stone", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Type of Reinforcing", "el": [
                      {"type": "choice", "name": "Fibres/Wood/Bamboo", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Steel rebar", "sub":
                        {"type": "group", "name": "Roof/Floor type", "el": [
                          {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                            {"type": "group", "name": "Height", "el": [
                              {"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                             ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                                {"type": "group", "name": "Irregularities", "el": [
                                  {"type": "choice", "name": "Irregular - torsion", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                 ,{"type": "choice", "name": "Regular", "sub":
                                    {"type": "group", "name": "Ductility", "el": [
                                      {"type": "choice", "name": "High-Ductililty (PGA>0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Moderate-Ductility (0.1<PGA<0.3g)", "sub": null }
                                     ,{"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                    ]}
                                  }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
            ]}
          }
         ,{"type": "choice", "name": "Unreinforced", "sub":
            {"type": "group", "name": "Type of block ", "el": [
              {"type": "choice", "name": "Adobe", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "No mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Ceramic brick", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "No mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Concrete block", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "No mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Fieldstone", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "No mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
             ,{"type": "choice", "name": "Stone", "sub":
                {"type": "group", "name": "Type of mortar", "el": [
                  {"type": "choice", "name": "Cement Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Lime Mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Mud", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "No mortar", "sub":
                    {"type": "group", "name": "Roof/Floor type", "el": [
                      {"type": "choice", "name": "Heavyweight floor (e.g. concrete slab)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Lightweight floor (e.g. wood floor)", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Irregular - torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                ]}
              }
            ]}
          }
        ]}
      }

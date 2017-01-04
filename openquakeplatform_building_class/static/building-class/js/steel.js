gem_bcs_tree_descr['steel'] = 
      {"type": "choice", "name": "steel", "sub":
        {"type": "group", "name": "Type of steel profile", "el": [
          {"type": "choice", "name": "Hot formed elements", "sub":
            {"type": "group", "name": "Type of connection", "el": [
              {"type": "choice", "name": "Bolted connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
             ,{"type": "choice", "name": "Welded connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
             ,{"type": "choice", "name": "Riveted connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
         ,{"type": "choice", "name": "Cold formed elements", "sub":
            {"type": "group", "name": "Type of connection", "el": [
              {"type": "choice", "name": "Bolted connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
             ,{"type": "choice", "name": "Welded connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
             ,{"type": "choice", "name": "Riveted connection", "sub":
                {"type": "group", "name": "Lateral load resisting  system", "el": [
                  {"type": "choice", "name": "Moment frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Braced frame", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Wall", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Dual system", "sub":
                    {"type": "group", "name": "Height", "el": [
                      {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                        {"type": "group", "name": "Irregularities", "el": [
                          {"type": "choice", "name": "Regular", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                             ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                             ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                            ]}
                          }
                         ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                            {"type": "group", "name": "Ductility", "el": [
                              {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                            ]}
                          }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "Infilled frame", "sub":
                    {"type": "group", "name": "Type of block", "el": [
                      {"type": "choice", "name": "Concrete block", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                        ]}
                      }
                     ,{"type": "choice", "name": "Ceramic brick", "sub":
                        {"type": "group", "name": "Height", "el": [
                          {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                ]}
                              }
                            ]}
                          }
                         ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                            {"type": "group", "name": "Irregularities", "el": [
                              {"type": "choice", "name": "Regular", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                                {"type": "group", "name": "Ductility", "el": [
                                  {"type": "choice", "name": "Non-Ductile (PGA<0.05g)", "sub": null }
                                 ,{"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                                 ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                                ]}
                              }
                             ,{"type": "choice", "name": "Irregular - soft storey", "sub":
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
      };

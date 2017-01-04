gem_bcs_tree_descr['wood'] = 
      {"type": "choice", "name": "wood", "sub":
        {"type": "group", "name": "Type of wood", "el": [
          {"type": "choice", "name": "Light wood", "sub":
            {"type": "group", "name": "Lateral load resisting  system", "el": [
              {"type": "choice", "name": "Frame (Traditional joinery e.g. dovetails)", "sub":
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
             ,{"type": "choice", "name": "Frame (Joins with plates and bolts)", "sub":
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
             ,{"type": "choice", "name": "Dual System", "sub":
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
         ,{"type": "choice", "name": "Heavy wood", "sub":
            {"type": "group", "name": "Lateral load resisting  system", "el": [
              {"type": "choice", "name": "Frame (Traditional joinery e.g. dovetails)", "sub":
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
             ,{"type": "choice", "name": "Frame (Joins with plates and bolts)", "sub":
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
             ,{"type": "choice", "name": "Dual System", "sub":
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
         ,{"type": "choice", "name": "Solid wood", "sub":
            {"type": "group", "name": "Lateral load resisting  system", "el": [
              {"type": "choice", "name": "Frame (Traditional joinery e.g. dovetails)", "sub":
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
             ,{"type": "choice", "name": "Frame (Joins with plates and bolts)", "sub":
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
             ,{"type": "choice", "name": "Dual System", "sub":
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
         ,{"type": "choice", "name": "Stud wall", "sub":
            {"type": "group", "name": "Lateral load resisting  system", "el": [
              {"type": "choice", "name": "Wall", "sub":
                {"type": "group", "name": "Height", "el": [
                  {"type": "choice", "name": "low-rise (<3 Floors)", "sub":
                    {"type": "group", "name": "Irregularities", "el": [
                      {"type": "choice", "name": "Regular", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                     ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "mid-rise (4-6 Floors)", "sub":
                    {"type": "group", "name": "Irregularities", "el": [
                      {"type": "choice", "name": "Regular", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                     ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "high-rise (7-12 Floors)", "sub":
                    {"type": "group", "name": "Irregularities", "el": [
                      {"type": "choice", "name": "Regular", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                     ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                    ]}
                  }
                 ,{"type": "choice", "name": "tall (>12 Floors)", "sub":
                    {"type": "group", "name": "Irregularities", "el": [
                      {"type": "choice", "name": "Regular", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
                        ]}
                      }
                     ,{"type": "choice", "name": "Irregular - Torsion", "sub":
                        {"type": "group", "name": "Ductility", "el": [
                          {"type": "choice", "name": "Moderate Ductile (0.1<PGA<0.3g)", "sub": null }
                         ,{"type": "choice", "name": "High Ductile (PGA>0.3g)", "sub": null }
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

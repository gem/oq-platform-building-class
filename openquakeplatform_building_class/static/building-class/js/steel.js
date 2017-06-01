/*
   Copyright (c) 2017, GEM Foundation.

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU Affero General Public License as
      published by the Free Software Foundation, either version 3 of the
      License, or (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU Affero General Public License for more details.

      You should have received a copy of the GNU Affero General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

gem_bcs_tree_descr['steel'] = { "name": "Steel", 
 "sub": {
  "el": [
   { "name": "Hot formed members", 
    "sub": {
     "el": [
      { "name": "Welded connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Bolted connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Riveted", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Unknown", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }
     ],  "name": "Type of connnection", "type": "group" }, 
    "type": "choice" }, 
   { "name": "Cold formed members", 
    "sub": {
     "el": [
      { "name": "Welded connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Bolted connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Riveted", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Unknown", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }
     ],  "name": "Type of connnection", "type": "group" }, 
    "type": "choice" }, 
   { "name": "Unknown", 
    "sub": {
     "el": [
      { "name": "Welded connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Bolted connection", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Riveted", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }, 
      { "name": "Unknown", 
       "sub": {
        "el": [
         { "name": "Moment frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Infilled frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }, 
                  { "name": "Unknown", 
                   "sub": {
                    "el": [
                     { "name": "Concrete block", "type": "choice" }, 
                     { "name": "Ceramic brick", "type": "choice" }, 
                     { "name": "Unknown", "type": "choice" }
                    ],  "name": "Type of block", "type": "group" }, 
                   "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Wall", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Dual system", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Braced frame", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }, 
         { "name": "Unknown", 
          "sub": {
           "el": [
            { "name": "Low rise (<3 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Mid rise (4-6 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "High-rise (7-12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Tall (>12 floors)", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }, 
            { "name": "Unknown", 
             "sub": {
              "el": [
               { "name": "Regular", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-soft storey", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Irregular-torsion", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }, 
               { "name": "Unknown", 
                "sub": {
                 "el": [
                  { "name": "Non ductile (PGA<0.1g)", "type": "choice" }, 
                  { "name": "Moderate ductility (0.1g<PGA<0.3g)", "type": "choice" }, 
                  { "name": "High ductility (PGA>0.3g)", "type": "choice" }, 
                  { "name": "Unknown", "type": "choice" }
                 ],  "name": "Ductility", "type": "group" }, 
                "type": "choice" }
              ],  "name": "Irregularities", "type": "group" }, 
             "type": "choice" }
           ],  "name": "Height", "type": "group" }, 
          "type": "choice" }
        ],  "name": "Lateral load resisting  system", "type": "group" }, 
       "type": "choice" }
     ],  "name": "Type of connnection", "type": "group" }, 
    "type": "choice" }
  ],  "name": "Type of steel profile", "type": "group" }, 
 "type": "choice" };

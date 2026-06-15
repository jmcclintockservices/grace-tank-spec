/* ============================================================
   GRACE FAMILY — RED FERMENTATION TANK
   EDITABLE SPEC DATA  (this is the file you edit)
   ------------------------------------------------------------
   HOW TO EDIT:
     1. Change the lines between the ` ` marks below.
     2. Save this file.
     3. Refresh the HTML page in your browser. Done.

   SPEC LIST lines:
     Label | value text        ->  • Label: value text
     (a line with no  |  shows as a plain bullet)
     A line that is just  ---   forces the break between the
     left and right spec columns. Move it to rebalance.

   SIZE SCHEDULE lines:
     Row name | 1 Ton | 2 Ton | 2.5 Ton | 3 Ton | 4 Ton | 5 Ton

   RULES:
     - Lines starting with  #  are ignored (notes to yourself).
     - Use straight inch marks (") freely — that's fine.
     - The ONLY character to avoid inside the text is the
       backtick  `  (it ends the block early).
   ============================================================ */


/* ---------- SPECIFICATION LIST ---------- */
const SPEC_LIST = `

Interior | 304 SS, #4 polish
Exterior | 304 SS, #4 polish (note tint / color / finish options)
Interior welds | TIG, buff polish, weld visible
Exterior (Shell) welds | TIG or MIG, buff polish, weld visible
Outer Wrap welds | TIG, ground smooth — horizontal & vertical seams
Shell Sidewall | single section or small course at top, 12 ga min
Top | knuckled cone, 5–10° to target overall height, 12 ga min
Bottom | knuckled, flat, sloping 1/2" per foot, 10 ga min
Outer wrap | 12 ga min, all fittings covered w/ SS escutcheons, fully TIG welded
Glycol jacket | single 4'-wide (min) zone, laser welded (preferred), 65 PSI (min) rating, 1" FNPT half-couple in/out, flow tested
Insulation | 2" thick, hydrophobic, sides & bottom

---

Top manway | 30" min, 2" TC spool for pump-over, min collar height, 2" TC vent — airtight: leak test at 12" WC (0.43 psi), hold 10 min, no visible leak or measurable pressure drop
Bottom manway | rectangular outswing, full gasket
Drain / pump inlet | 2" TC, sump style
Must inlet | 3" TC
Racking | 1.5" TC
Sparge | 2" TC
Sample | 1" TC
Temperature | 1.5" TC
Drain screen | high flow, sanitary, covers drain & sample port
Temp well | 18" long, 1/2" FNPT w/ brace, fully welded
Legs | 6" sch 40 SS, welded to body or on stand; 10" Ø × 1/4" footpads, 2" height adjust
Leg bracing | per structural — assume 2" sch 40 SS single diagonal
Pump plate | assume 12" × 10" × 1/4" w/ gussets
Pump Control | assume 6" × 8" × 12 ga bracket
Pump-over | piping & install separate / by others

`;


/* ---------- SIZE SCHEDULE ---------- */
// First line = column headers. Edit numbers in the rows below.
const SCHEDULE_HEADERS = `Nominal Size | 1 Ton | 2 Ton | 2.5 Ton| 3 Ton | 4 Ton | 5 Ton`;

const SIZE_SCHEDULE = `

Quantity | 4 | 2 | 2 | 4 | 8 | 6
Inner Diameter (in) | 42 | 54 | 58 | 61 | 66 | 73
Outer Diameter (in) | 46 | 58 | 62 | 65 | 70 | 77
Shell Sidewall Height (in) | 48 | 60 | 60 | 72 | 72 | 76
Ground Clearance (in) | 34 | 34 | 34 | 34 | 34 | 34
Target Overall Height (in) | 101 | 113 | 114 | 126 | 126 | 130

`;


/* ---------- PRICING NOTES (the lines under the table) ---------- */
const SPEC_NOTES = `Provide outer wrap tint / color / finish options, and estimated price increase
Note price change for laser welded jackets
Note price increase for optional racking door
1, 1.5 & 2.5 Ton tank top manway may be less than 30" diameter
1, 1.5 & 2.5 Ton tank will not have pump plate or pump control bracket
Please note ideal lead time to generate detailed drawings and best-effort fabrication`;


# {{people_admin.section_01.title}}

## {{people_admin.section_01.1_1_team_overview.title}}
- {{people_admin.section_01.1_1_team_overview.headcount}}
- {{people_admin.section_01.1_1_team_overview.locations}}
- {{people_admin.section_01.1_1_team_overview.departments.title}}
  - {{people_admin.section_01.1_1_team_overview.departments.management}}
  - {{people_admin.section_01.1_1_team_overview.departments.technical}}
  - {{people_admin.section_01.1_1_team_overview.departments.sales}}

## {{people_admin.section_01.1_2_organogram.title}}
<div style="max-width:1100px; margin: 0 auto;">
<svg viewBox="0 0 1100 420" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organization chart">
  <style>
    .box { fill: #0f172a; stroke: #1f2937; stroke-width: 1; }
    .title { fill: #ffffff; font: 700 14px/1.2 'Arial'; }
    .subtitle { fill: #c7d2fe; font: 400 12px/1.1 'Arial'; }
    .line { stroke: #94a3b8; stroke-width: 2; }
    .small { fill: #c7d2fe; font: 400 11px/1.1 'Arial'; }
  </style>

  <!-- Top: Karim -->
  <rect x="400" y="10" width="300" height="56" rx="6" class="box"/>
  <text x="550" y="34" text-anchor="middle" class="title">Karim BEN SALEM</text>
  <text x="550" y="52" text-anchor="middle" class="subtitle">{{people_admin.section_01.1_2_organogram.labels.manager}}</text>

  <!-- Najla under Karim -->
  <rect x="400" y="86" width="300" height="56" rx="6" class="box"/>
  <text x="550" y="110" text-anchor="middle" class="title">Najla BEN SALEM</text>
  <text x="550" y="128" text-anchor="middle" class="subtitle">{{people_admin.section_01.1_2_organogram.labels.co_manager}}</text>

  <line x1="550" y1="66" x2="550" y2="86" class="line" />

  <!-- Main services (same level) -->
  <!-- Operations -->
  <rect x="40" y="200" width="220" height="64" rx="6" class="box"/>
  <text x="150" y="228" text-anchor="middle" class="title">{{people_admin.section_01.1_2_organogram.labels.operations}}</text>
  <text x="150" y="246" text-anchor="middle" class="subtitle">Mohamed CHRAITI</text>

  <!-- Sales -->
  <rect id="sales-box" x="320" y="200" width="220" height="64" rx="6" class="box"/>
  <text x="430" y="228" text-anchor="middle" class="title">{{people_admin.section_01.1_2_organogram.labels.sales}}</text>
  <text x="430" y="246" text-anchor="middle" class="subtitle">{{people_admin.section_01.1_2_organogram.labels.najla_reps}}</text>

  <!-- Sales sub boxes: Sfax, Tunis, Warehouse/Showroom (same level) -->
  <rect x="285" y="274" width="140" height="48" rx="6" class="box"/>
  <text x="355" y="300" text-anchor="middle" class="small">{{people_admin.section_01.1_2_organogram.labels.sfax_sales}}</text>
  <text x="355" y="316" text-anchor="middle" class="small">Mohamed CHRAITI</text>

  <rect x="455" y="274" width="140" height="48" rx="6" class="box"/>
  <text x="525" y="300" text-anchor="middle" class="small">{{people_admin.section_01.1_2_organogram.labels.tunis_sales}}</text>
  <text x="525" y="316" text-anchor="middle" class="small">(Kais KHAIRALLAH)</text>

  <rect x="625" y="274" width="200" height="48" rx="6" class="box"/>
  <text x="725" y="298" text-anchor="middle" class="small">{{people_admin.section_01.1_2_organogram.labels.warehouse}}</text>
  <text x="725" y="314" text-anchor="middle" class="small">{{people_admin.section_01.1_2_organogram.labels.responsible}}</text>

  <!-- Finance & Admin -->
  <rect x="640" y="200" width="220" height="64" rx="6" class="box"/>
  <text x="750" y="228" text-anchor="middle" class="title">{{people_admin.section_01.1_2_organogram.labels.finance_admin}}</text>
  <text x="750" y="246" text-anchor="middle" class="subtitle">Mohamed Ali LENDA</text>

  <!-- Collections -->
  <rect id="collections-box" x="880" y="200" width="200" height="64" rx="6" class="box"/>
  <text x="980" y="228" text-anchor="middle" class="title">{{people_admin.section_01.1_2_organogram.labels.collections}}</text>
  <text x="980" y="246" text-anchor="middle" class="subtitle">Hela DAOUD</text>
  <!-- Kais under Hela as Collection Agent (while also shown in Tunis Sales) -->
  <rect x="915" y="284" width="150" height="36" rx="6" class="box"/>
  <text x="990" y="306" text-anchor="middle" class="small">Kais KHAIRALLAH</text>
  <text x="990" y="320" text-anchor="middle" class="small">{{people_admin.section_01.1_2_organogram.labels.collection_agent}}</text>

  <!-- Lines from Najla to main services -->
  <line x1="550" y1="142" x2="150" y2="200" class="line" />
  <line x1="550" y1="142" x2="430" y2="200" class="line" />
  <line x1="550" y1="142" x2="750" y2="200" class="line" />
  <line x1="550" y1="142" x2="980" y2="200" class="line" />

  <!-- Lines linking Sales box to its sub boxes -->
  <line x1="430" y1="264" x2="355" y2="274" class="line" />
  <line x1="430" y1="264" x2="525" y2="274" class="line" />
  <line x1="430" y1="264" x2="725" y2="274" class="line" />

  <!-- Line linking Collections to Kais under it -->
  <line x1="980" y1="264" x2="990" y2="284" class="line" />

</svg>
</div>

## {{people_admin.section_01.1_3_roles.title}}

### {{people_admin.section_01.1_3_roles.key_roles.title}}
- {{people_admin.section_01.1_3_roles.key_roles.manager}}
- {{people_admin.section_01.1_3_roles.key_roles.co_manager}}
- {{people_admin.section_01.1_3_roles.key_roles.operations}}
- {{people_admin.section_01.1_3_roles.key_roles.admin_finance}}
- {{people_admin.section_01.1_3_roles.key_roles.collections}}

### {{people_admin.section_01.1_3_roles.tech_team.title}}
- {{people_admin.section_01.1_3_roles.tech_team.team_leaders}}
- {{people_admin.section_01.1_3_roles.tech_team.technicians}}
- {{people_admin.section_01.1_3_roles.tech_team.workshop}}

## {{people_admin.section_01.1_4_career_paths.title}}

### {{people_admin.section_01.1_4_career_paths.progression.title}}
{{people_admin.section_01.1_4_career_paths.progression.tech}}
{{people_admin.section_01.1_4_career_paths.progression.sales}}
{{people_admin.section_01.1_4_career_paths.progression.admin}}

### {{people_admin.section_01.1_4_career_paths.competency.title}}
- {{people_admin.section_01.1_4_career_paths.competency.technical}}
- {{people_admin.section_01.1_4_career_paths.competency.service}}
- {{people_admin.section_01.1_4_career_paths.competency.leadership}}

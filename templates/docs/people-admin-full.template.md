
# {{people_admin_toc.title}}

> {{people_admin_toc.meta.doc_id}}
> {{people_admin_toc.meta.version}}
> {{people_admin_toc.meta.updated}}
> {{people_admin_toc.meta.breadcrumbs}}

---

## {{people_admin_toc.toc_title}}

- {{people_admin_toc.sections.s1}}
- {{people_admin_toc.sections.s2}}
- {{people_admin_toc.sections.s3}}
- {{people_admin_toc.sections.s4}}
- {{people_admin_toc.sections.s5}}
- {{people_admin_toc.sections.s6}}
- {{people_admin_toc.sections.s7}}
- {{people_admin_toc.sections.s8}}
- {{people_admin_toc.sections.s9}}
- {{people_admin_toc.sections.s10}}
- {{people_admin_toc.sections.s11}}
- {{people_admin_toc.sections.s12}}

---


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


# {{people_admin.section_02.title}}

## {{people_admin.section_02.2_1_workforce.title}}
- {{people_admin.section_02.2_1_workforce.points.0}}
- {{people_admin.section_02.2_1_workforce.points.1}}
- {{people_admin.section_02.2_1_workforce.points.2}}

## {{people_admin.section_02.2_2_roles.title}}
> {{people_admin.section_02.2_2_roles.note}}
- {{people_admin.section_02.2_2_roles.points.0}}
- {{people_admin.section_02.2_2_roles.points.1}}
- {{people_admin.section_02.2_2_roles.points.2}}

## {{people_admin.section_02.2_3_process.title}}
{{people_admin.section_02.2_3_process.steps.0}}
{{people_admin.section_02.2_3_process.steps.1}}
{{people_admin.section_02.2_3_process.steps.2}}
{{people_admin.section_02.2_3_process.steps.3}}
{{people_admin.section_02.2_3_process.steps.4}}
{{people_admin.section_02.2_3_process.steps.5}}
{{people_admin.section_02.2_3_process.steps.6}}
{{people_admin.section_02.2_3_process.steps.7}}
{{people_admin.section_02.2_3_process.steps.8}}

## {{people_admin.section_02.2_4_onboarding.title}}
- {{people_admin.section_02.2_4_onboarding.points.0}}
- {{people_admin.section_02.2_4_onboarding.points.1}}
- {{people_admin.section_02.2_4_onboarding.points.2}}

---


# {{people_admin.section_03.title}}

## {{people_admin.section_03.3_1_contracts.title}}
- {{people_admin.section_03.3_1_contracts.points.0}}
- {{people_admin.section_03.3_1_contracts.points.1}}
- {{people_admin.section_03.3_1_contracts.points.2}}

## {{people_admin.section_03.3_2_probation.title}}
- {{people_admin.section_03.3_2_probation.points.0}}
- {{people_admin.section_03.3_2_probation.points.1}}
  - {{people_admin.section_03.3_2_probation.points.2}}
  - {{people_admin.section_03.3_2_probation.points.3}}
  - {{people_admin.section_03.3_2_probation.points.4}}
- {{people_admin.section_03.3_2_probation.points.5}}

## {{people_admin.section_03.3_3_working_hours.title}}
- {{people_admin.section_03.3_3_working_hours.points.0}}
- {{people_admin.section_03.3_3_working_hours.points.1}}
  - {{people_admin.section_03.3_3_working_hours.points.2}}
  - {{people_admin.section_03.3_3_working_hours.points.3}}
- {{people_admin.section_03.3_3_working_hours.points.4}}

## {{people_admin.section_03.3_4_overtime.title}}
- {{people_admin.section_03.3_4_overtime.points.0}}
- {{people_admin.section_03.3_4_overtime.points.1}}
- {{people_admin.section_03.3_4_overtime.points.2}}
  - {{people_admin.section_03.3_4_overtime.points.3}}
  - {{people_admin.section_03.3_4_overtime.points.4}}
  - {{people_admin.section_03.3_4_overtime.points.5}}

## {{people_admin.section_03.3_5_handbook.title}}
- {{people_admin.section_03.3_5_handbook.points.0}}
- {{people_admin.section_03.3_5_handbook.points.1}}
- {{people_admin.section_03.3_5_handbook.points.2}}



# {{people_admin.section_04.title}}

## {{people_admin.section_04.4_1_salary_structure.title}}

### {{people_admin.section_04.4_1_salary_structure.philosophy.title}}

{{people_admin.section_04.4_1_salary_structure.philosophy.principles}}
- {{people_admin.section_04.4_1_salary_structure.philosophy.points.0}}
- {{people_admin.section_04.4_1_salary_structure.philosophy.points.1}}
- {{people_admin.section_04.4_1_salary_structure.philosophy.points.2}}
- {{people_admin.section_04.4_1_salary_structure.philosophy.points.3}}
- {{people_admin.section_04.4_1_salary_structure.philosophy.points.4}}

---

### {{people_admin.section_04.4_1_salary_structure.ranges.title}}

{{people_admin.section_04.4_1_salary_structure.ranges.management.title}}

| {{people_admin.section_04.4_1_salary_structure.ranges.management.headers.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.headers.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.headers.2}} |
|----------|--------------|-------|
| {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.0.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.0.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.0.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.1.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.1.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.1.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.2.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.2.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.2.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.3.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.3.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.3.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.4.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.4.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.management.rows.4.2}} |

---

{{people_admin.section_04.4_1_salary_structure.ranges.technical.title}}

| {{people_admin.section_04.4_1_salary_structure.ranges.technical.headers.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.headers.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.headers.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.headers.3}} |
|----------|------------|--------------|-------------|
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.0.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.0.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.0.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.0.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.1.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.1.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.1.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.1.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.2.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.2.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.2.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.2.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.3.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.3.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.3.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.3.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.4.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.4.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.4.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.4.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.5.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.5.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.5.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.5.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.6.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.6.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.6.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.6.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.7.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.7.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.7.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.7.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.8.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.8.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.8.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.8.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.9.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.9.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.9.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.technical.rows.9.3}} |

---

{{people_admin.section_04.4_1_salary_structure.ranges.factors.title}}
- {{people_admin.section_04.4_1_salary_structure.ranges.factors.points.0}}
- {{people_admin.section_04.4_1_salary_structure.ranges.factors.points.1}}
- {{people_admin.section_04.4_1_salary_structure.ranges.factors.points.2}}
- {{people_admin.section_04.4_1_salary_structure.ranges.factors.points.3}}
- {{people_admin.section_04.4_1_salary_structure.ranges.factors.points.4}}

---

{{people_admin.section_04.4_1_salary_structure.ranges.sales.title}}

| {{people_admin.section_04.4_1_salary_structure.ranges.sales.headers.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.headers.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.headers.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.headers.3}} |
|----------|-------------|------------|-----------------|
| {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.0.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.0.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.0.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.0.3}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.1.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.1.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.1.2}} | {{people_admin.section_04.4_1_salary_structure.ranges.sales.rows.1.3}} |

{{people_admin.section_04.4_1_salary_structure.ranges.sales.commission_note}}

---

{{people_admin.section_04.4_1_salary_structure.ranges.support.title}}

| {{people_admin.section_04.4_1_salary_structure.ranges.support.headers.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.headers.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.headers.2}} |
|----------|--------------|-------|
| {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.0.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.0.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.0.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.1.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.1.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.1.2}} |
| {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.2.0}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.2.1}} | {{people_admin.section_04.4_1_salary_structure.ranges.support.rows.2.2}} |

---

### {{people_admin.section_04.4_1_salary_structure.minimum_wage.title}}

{{people_admin.section_04.4_1_salary_structure.minimum_wage.smig}}
- {{people_admin.section_04.4_1_salary_structure.minimum_wage.points.0}}
- {{people_admin.section_04.4_1_salary_structure.minimum_wage.points.1}}
- {{people_admin.section_04.4_1_salary_structure.minimum_wage.points.2}}

---

### {{people_admin.section_04.4_1_salary_structure.determination.title}}

{{people_admin.section_04.4_1_salary_structure.determination.process}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.0}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.1}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.2}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.3}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.4}}
{{people_admin.section_04.4_1_salary_structure.determination.steps.5}}

---

## {{people_admin.section_04.4_2_increases.title}}

### {{people_admin.section_04.4_2_increases.types.title}}

{{people_admin.section_04.4_2_increases.types.cola.title}}
- {{people_admin.section_04.4_2_increases.types.cola.points.0}}
- {{people_admin.section_04.4_2_increases.types.cola.points.1}}
- {{people_admin.section_04.4_2_increases.types.cola.points.2}}
- {{people_admin.section_04.4_2_increases.types.cola.points.3}}
- {{people_admin.section_04.4_2_increases.types.cola.points.4}}
- {{people_admin.section_04.4_2_increases.types.cola.points.5}}
- {{people_admin.section_04.4_2_increases.types.cola.points.6}}

{{people_admin.section_04.4_2_increases.types.merit.title}}
- {{people_admin.section_04.4_2_increases.types.merit.points.0}}
- {{people_admin.section_04.4_2_increases.types.merit.points.1}}
- {{people_admin.section_04.4_2_increases.types.merit.points.2}}
- {{people_admin.section_04.4_2_increases.types.merit.points.3}}
- {{people_admin.section_04.4_2_increases.types.merit.points.4}}

{{people_admin.section_04.4_2_increases.types.promotion.title}}
- {{people_admin.section_04.4_2_increases.types.promotion.points.0}}
- {{people_admin.section_04.4_2_increases.types.promotion.points.1}}
- {{people_admin.section_04.4_2_increases.types.promotion.points.2}}
- {{people_admin.section_04.4_2_increases.types.promotion.points.3}}

{{people_admin.section_04.4_2_increases.types.market.title}}
- {{people_admin.section_04.4_2_increases.types.market.points.0}}
- {{people_admin.section_04.4_2_increases.types.market.points.1}}
- {{people_admin.section_04.4_2_increases.types.market.points.2}}
- {{people_admin.section_04.4_2_increases.types.market.points.3}}

---

### {{people_admin.section_04.4_2_increases.matrix.title}}

{{people_admin.section_04.4_2_increases.matrix.subtitle}}

| {{people_admin.section_04.4_2_increases.matrix.headers.0}} | {{people_admin.section_04.4_2_increases.matrix.headers.1}} | {{people_admin.section_04.4_2_increases.matrix.headers.2}} |
|-------------------|----------------|-------------|
| {{people_admin.section_04.4_2_increases.matrix.rows.0.0}} | {{people_admin.section_04.4_2_increases.matrix.rows.0.1}} | {{people_admin.section_04.4_2_increases.matrix.rows.0.2}} |
| {{people_admin.section_04.4_2_increases.matrix.rows.1.0}} | {{people_admin.section_04.4_2_increases.matrix.rows.1.1}} | {{people_admin.section_04.4_2_increases.matrix.rows.1.2}} |
| {{people_admin.section_04.4_2_increases.matrix.rows.2.0}} | {{people_admin.section_04.4_2_increases.matrix.rows.2.1}} | {{people_admin.section_04.4_2_increases.matrix.rows.2.2}} |
| {{people_admin.section_04.4_2_increases.matrix.rows.3.0}} | {{people_admin.section_04.4_2_increases.matrix.rows.3.1}} | {{people_admin.section_04.4_2_increases.matrix.rows.3.2}} |
| {{people_admin.section_04.4_2_increases.matrix.rows.4.0}} | {{people_admin.section_04.4_2_increases.matrix.rows.4.1}} | {{people_admin.section_04.4_2_increases.matrix.rows.4.2}} |

{{people_admin.section_04.4_2_increases.matrix.factors.title}}
- {{people_admin.section_04.4_2_increases.matrix.factors.points.0}}
- {{people_admin.section_04.4_2_increases.matrix.factors.points.1}}
- {{people_admin.section_04.4_2_increases.matrix.factors.points.2}}

---

### {{people_admin.section_04.4_2_increases.process.title}}

{{people_admin.section_04.4_2_increases.process.timeline}}

{{people_admin.section_04.4_2_increases.process.nov_dec.title}}
- {{people_admin.section_04.4_2_increases.process.nov_dec.points.0}}
- {{people_admin.section_04.4_2_increases.process.nov_dec.points.1}}
- {{people_admin.section_04.4_2_increases.process.nov_dec.points.2}}

{{people_admin.section_04.4_2_increases.process.jan.title}}
- {{people_admin.section_04.4_2_increases.process.jan.points.0}}
- {{people_admin.section_04.4_2_increases.process.jan.points.1}}
- {{people_admin.section_04.4_2_increases.process.jan.points.2}}

{{people_admin.section_04.4_2_increases.process.feb_mar.title}}
- {{people_admin.section_04.4_2_increases.process.feb_mar.points.0}}
- {{people_admin.section_04.4_2_increases.process.feb_mar.points.1}}
- {{people_admin.section_04.4_2_increases.process.feb_mar.points.2}}

{{people_admin.section_04.4_2_increases.process.mar_approval.title}}
- {{people_admin.section_04.4_2_increases.process.mar_approval.points.0}}
- {{people_admin.section_04.4_2_increases.process.mar_approval.points.1}}
- {{people_admin.section_04.4_2_increases.process.mar_approval.points.2}}

{{people_admin.section_04.4_2_increases.process.apr_comm.title}}
- {{people_admin.section_04.4_2_increases.process.apr_comm.points.0}}
- {{people_admin.section_04.4_2_increases.process.apr_comm.points.1}}
- {{people_admin.section_04.4_2_increases.process.apr_comm.points.2}}
- {{people_admin.section_04.4_2_increases.process.apr_comm.points.3}}

{{people_admin.section_04.4_2_increases.process.may_payroll.title}}
- {{people_admin.section_04.4_2_increases.process.may_payroll.points.0}}
- {{people_admin.section_04.4_2_increases.process.may_payroll.points.1}}

---

### {{people_admin.section_04.4_2_increases.communication.title}}

{{people_admin.section_04.4_2_increases.communication.cola.title}}
- {{people_admin.section_04.4_2_increases.communication.cola.points.0}}
- {{people_admin.section_04.4_2_increases.communication.cola.points.1}}

{{people_admin.section_04.4_2_increases.communication.merit.title}}
- {{people_admin.section_04.4_2_increases.communication.merit.points.0}}
- {{people_admin.section_04.4_2_increases.communication.merit.points.1}}
  * {{people_admin.section_04.4_2_increases.communication.merit.points.2}}
  * {{people_admin.section_04.4_2_increases.communication.merit.points.3}}
  * {{people_admin.section_04.4_2_increases.communication.merit.points.4}}
  * {{people_admin.section_04.4_2_increases.communication.merit.points.5}}
  * {{people_admin.section_04.4_2_increases.communication.merit.points.6}}
- {{people_admin.section_04.4_2_increases.communication.merit.points.7}}

{{people_admin.section_04.4_2_increases.communication.none.title}}
- {{people_admin.section_04.4_2_increases.communication.none.points.0}}
- {{people_admin.section_04.4_2_increases.communication.none.points.1}}
- {{people_admin.section_04.4_2_increases.communication.none.points.2}}
- {{people_admin.section_04.4_2_increases.communication.none.points.3}}
- {{people_admin.section_04.4_2_increases.communication.none.points.4}}

---

## {{people_admin.section_04.4_3_commission.title}}

### {{people_admin.section_04.4_3_commission.philosophy.title}}

{{people_admin.section_04.4_3_commission.philosophy.purpose.title}}
- {{people_admin.section_04.4_3_commission.philosophy.purpose.points.0}}
- {{people_admin.section_04.4_3_commission.philosophy.purpose.points.1}}
- {{people_admin.section_04.4_3_commission.philosophy.purpose.points.2}}
- {{people_admin.section_04.4_3_commission.philosophy.purpose.points.3}}

{{people_admin.section_04.4_3_commission.philosophy.design.title}}
- {{people_admin.section_04.4_3_commission.philosophy.design.points.0}}
- {{people_admin.section_04.4_3_commission.philosophy.design.points.1}}
- {{people_admin.section_04.4_3_commission.philosophy.design.points.2}}
- {{people_admin.section_04.4_3_commission.philosophy.design.points.3}}
- {{people_admin.section_04.4_3_commission.philosophy.design.points.4}}

---

### {{people_admin.section_04.4_3_commission.structure.title}}

{{people_admin.section_04.4_3_commission.structure.model}}

{{people_admin.section_04.4_3_commission.structure.base.title}}
- {{people_admin.section_04.4_3_commission.structure.base.points.0}}
- {{people_admin.section_04.4_3_commission.structure.base.points.1}}

{{people_admin.section_04.4_3_commission.structure.commission.title}}
- {{people_admin.section_04.4_3_commission.structure.commission.points.0}}
- {{people_admin.section_04.4_3_commission.structure.commission.points.1}}

---

### {{people_admin.section_04.4_3_commission.rates.title}}

| {{people_admin.section_04.4_3_commission.rates.headers.0}} | {{people_admin.section_04.4_3_commission.rates.headers.1}} | {{people_admin.section_04.4_3_commission.rates.headers.2}} | {{people_admin.section_04.4_3_commission.rates.headers.3}} |
|----------|-----------------------|-----------------|-------|
| {{people_admin.section_04.4_3_commission.rates.rows.0.0}} | {{people_admin.section_04.4_3_commission.rates.rows.0.1}} | {{people_admin.section_04.4_3_commission.rates.rows.0.2}} | {{people_admin.section_04.4_3_commission.rates.rows.0.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.1.0}} | {{people_admin.section_04.4_3_commission.rates.rows.1.1}} | {{people_admin.section_04.4_3_commission.rates.rows.1.2}} | {{people_admin.section_04.4_3_commission.rates.rows.1.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.2.0}} | {{people_admin.section_04.4_3_commission.rates.rows.2.1}} | {{people_admin.section_04.4_3_commission.rates.rows.2.2}} | {{people_admin.section_04.4_3_commission.rates.rows.2.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.3.0}} | {{people_admin.section_04.4_3_commission.rates.rows.3.1}} | {{people_admin.section_04.4_3_commission.rates.rows.3.2}} | {{people_admin.section_04.4_3_commission.rates.rows.3.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.4.0}} | {{people_admin.section_04.4_3_commission.rates.rows.4.1}} | {{people_admin.section_04.4_3_commission.rates.rows.4.2}} | {{people_admin.section_04.4_3_commission.rates.rows.4.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.5.0}} | {{people_admin.section_04.4_3_commission.rates.rows.5.1}} | {{people_admin.section_04.4_3_commission.rates.rows.5.2}} | {{people_admin.section_04.4_3_commission.rates.rows.5.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.6.0}} | {{people_admin.section_04.4_3_commission.rates.rows.6.1}} | {{people_admin.section_04.4_3_commission.rates.rows.6.2}} | {{people_admin.section_04.4_3_commission.rates.rows.6.3}} |
| {{people_admin.section_04.4_3_commission.rates.rows.7.0}} | {{people_admin.section_04.4_3_commission.rates.rows.7.1}} | {{people_admin.section_04.4_3_commission.rates.rows.7.2}} | {{people_admin.section_04.4_3_commission.rates.rows.7.3}} |

{{people_admin.section_04.4_3_commission.rates.eligibility_rule}}

---

### {{people_admin.section_04.4_3_commission.examples.title}}

{{people_admin.section_04.4_3_commission.examples.ex1.title}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.0}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.1}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.2}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.3}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.4}}
- {{people_admin.section_04.4_3_commission.examples.ex1.points.5}}

{{people_admin.section_04.4_3_commission.examples.ex2.title}}
- {{people_admin.section_04.4_3_commission.examples.ex2.points.0}}
- {{people_admin.section_04.4_3_commission.examples.ex2.points.1}}
- {{people_admin.section_04.4_3_commission.examples.ex2.points.2}}
  * {{people_admin.section_04.4_3_commission.examples.ex2.points.3}}
  * {{people_admin.section_04.4_3_commission.examples.ex2.points.4}}
  * {{people_admin.section_04.4_3_commission.examples.ex2.points.5}}

{{people_admin.section_04.4_3_commission.examples.ex3.title}}
- {{people_admin.section_04.4_3_commission.examples.ex3.points.0}}
- {{people_admin.section_04.4_3_commission.examples.ex3.points.1}}
- {{people_admin.section_04.4_3_commission.examples.ex3.points.2}}
- {{people_admin.section_04.4_3_commission.examples.ex3.points.3}}
- {{people_admin.section_04.4_3_commission.examples.ex3.points.4}}

---

### {{people_admin.section_04.4_3_commission.timing.title}}

{{people_admin.section_04.4_3_commission.timing.rule}}

{{people_admin.section_04.4_3_commission.timing.rationale.title}}
- {{people_admin.section_04.4_3_commission.timing.rationale.points.0}}
- {{people_admin.section_04.4_3_commission.timing.rationale.points.1}}
- {{people_admin.section_04.4_3_commission.timing.rationale.points.2}}

{{people_admin.section_04.4_3_commission.timing.process.title}}

{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.title}}
{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.points.0}}
{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.points.1}}
{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.points.2}}
{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.points.3}}
{{people_admin.section_04.4_3_commission.timing.process.monthly_calc.points.4}}

{{people_admin.section_04.4_3_commission.timing.process.statement.title}}
- {{people_admin.section_04.4_3_commission.timing.process.statement.points.0}}
- {{people_admin.section_04.4_3_commission.timing.process.statement.points.1}}
- {{people_admin.section_04.4_3_commission.timing.process.statement.points.2}}

{{people_admin.section_04.4_3_commission.timing.process.payment.title}}
- {{people_admin.section_04.4_3_commission.timing.process.payment.points.0}}
- {{people_admin.section_04.4_3_commission.timing.process.payment.points.1}}
- {{people_admin.section_04.4_3_commission.timing.process.payment.points.2}}

{{people_admin.section_04.4_3_commission.timing.process.example.title}}
- {{people_admin.section_04.4_3_commission.timing.process.example.points.0}}
- {{people_admin.section_04.4_3_commission.timing.process.example.points.1}}
- {{people_admin.section_04.4_3_commission.timing.process.example.points.2}}
- {{people_admin.section_04.4_3_commission.timing.process.example.points.3}}

---

### {{people_admin.section_04.4_3_commission.caps.title}}

{{people_admin.section_04.4_3_commission.caps.no_cap.title}}
- {{people_admin.section_04.4_3_commission.caps.no_cap.points.0}}
- {{people_admin.section_04.4_3_commission.caps.no_cap.points.1}}
- {{people_admin.section_04.4_3_commission.caps.no_cap.points.2}}
- {{people_admin.section_04.4_3_commission.caps.no_cap.points.3}}

{{people_admin.section_04.4_3_commission.caps.expectations.title}}
- {{people_admin.section_04.4_3_commission.caps.expectations.points.0}}
- {{people_admin.section_04.4_3_commission.caps.expectations.points.1}}
- {{people_admin.section_04.4_3_commission.caps.expectations.points.2}}

---

### {{people_admin.section_04.4_3_commission.clawbacks.title}}

{{people_admin.section_04.4_3_commission.clawbacks.returns.title}}
- {{people_admin.section_04.4_3_commission.clawbacks.returns.points.0}}
- {{people_admin.section_04.4_3_commission.clawbacks.returns.points.1}}

{{people_admin.section_04.4_3_commission.clawbacks.process.title}}
{{people_admin.section_04.4_3_commission.clawbacks.process.points.0}}
{{people_admin.section_04.4_3_commission.clawbacks.process.points.1}}
{{people_admin.section_04.4_3_commission.clawbacks.process.points.2}}
{{people_admin.section_04.4_3_commission.clawbacks.process.points.3}}

{{people_admin.section_04.4_3_commission.clawbacks.disputes.title}}
- {{people_admin.section_04.4_3_commission.clawbacks.disputes.points.0}}
- {{people_admin.section_04.4_3_commission.clawbacks.disputes.points.1}}
- {{people_admin.section_04.4_3_commission.clawbacks.disputes.points.2}}

---

### {{people_admin.section_04.4_3_commission.split.title}}

{{people_admin.section_04.4_3_commission.split.scenarios.title}}
- {{people_admin.section_04.4_3_commission.split.scenarios.points.0}}
- {{people_admin.section_04.4_3_commission.split.scenarios.points.1}}
- {{people_admin.section_04.4_3_commission.split.scenarios.points.2}}

{{people_admin.section_04.4_3_commission.split.rules.title}}
- {{people_admin.section_04.4_3_commission.split.rules.points.0}}
- {{people_admin.section_04.4_3_commission.split.rules.points.1}}
- {{people_admin.section_04.4_3_commission.split.rules.points.2}}
- {{people_admin.section_04.4_3_commission.split.rules.points.3}}

---

### {{people_admin.section_04.4_3_commission.contests.title}}

{{people_admin.section_04.4_3_commission.contests.subtitle}}

{{people_admin.section_04.4_3_commission.contests.quarterly.title}}
- {{people_admin.section_04.4_3_commission.contests.quarterly.points.0}}
- {{people_admin.section_04.4_3_commission.contests.quarterly.points.1}}
- {{people_admin.section_04.4_3_commission.contests.quarterly.points.2}}
- {{people_admin.section_04.4_3_commission.contests.quarterly.points.3}}

{{people_admin.section_04.4_3_commission.contests.annual.title}}
- {{people_admin.section_04.4_3_commission.contests.annual.points.0}}
- {{people_admin.section_04.4_3_commission.contests.annual.points.1}}
- {{people_admin.section_04.4_3_commission.contests.annual.points.2}}
- {{people_admin.section_04.4_3_commission.contests.annual.points.3}}


## {{people_admin.section_04.4_4_allowances.title}}

### {{people_admin.section_04.4_4_allowances.transport.title}}

{{people_admin.section_04.4_4_allowances.transport.eligibility}}

{{people_admin.section_04.4_4_allowances.transport.purpose}}

{{people_admin.section_04.4_4_allowances.transport.amount}}
- {{people_admin.section_04.4_4_allowances.transport.amount_points.0}}

{{people_admin.section_04.4_4_allowances.transport.conditions}}
- {{people_admin.section_04.4_4_allowances.transport.conditions_points.0}}
- {{people_admin.section_04.4_4_allowances.transport.conditions_points.1}}
- {{people_admin.section_04.4_4_allowances.transport.conditions_points.2}}
- {{people_admin.section_04.4_4_allowances.transport.conditions_points.3}}
- {{people_admin.section_04.4_4_allowances.transport.conditions_points.4}}

{{people_admin.section_04.4_4_allowances.transport.alternative}}
- {{people_admin.section_04.4_4_allowances.transport.alternative_points.0}}
- {{people_admin.section_04.4_4_allowances.transport.alternative_points.1}}

---

### {{people_admin.section_04.4_4_allowances.meal.title}}

{{people_admin.section_04.4_4_allowances.meal.eligibility}}

{{people_admin.section_04.4_4_allowances.meal.purpose}}

{{people_admin.section_04.4_4_allowances.meal.amount.title}}
- {{people_admin.section_04.4_4_allowances.meal.amount.points.0}}
- {{people_admin.section_04.4_4_allowances.meal.amount.points.1}}

{{people_admin.section_04.4_4_allowances.meal.calculation.title}}
- {{people_admin.section_04.4_4_allowances.meal.calculation.points.0}}
- {{people_admin.section_04.4_4_allowances.meal.calculation.points.1}}

{{people_admin.section_04.4_4_allowances.meal.deductions.title}}
- {{people_admin.section_04.4_4_allowances.meal.deductions.points.0}}
- {{people_admin.section_04.4_4_allowances.meal.deductions.points.1}}
- {{people_admin.section_04.4_4_allowances.meal.deductions.points.2}}

{{people_admin.section_04.4_4_allowances.meal.payment.title}}
- {{people_admin.section_04.4_4_allowances.meal.payment.points.0}}
- {{people_admin.section_04.4_4_allowances.meal.payment.points.1}}
- {{people_admin.section_04.4_4_allowances.meal.payment.points.2}}

---

### {{people_admin.section_04.4_4_allowances.mobile.title}}

{{people_admin.section_04.4_4_allowances.mobile.subtitle}}

{{people_admin.section_04.4_4_allowances.mobile.eligibility.title}}
- {{people_admin.section_04.4_4_allowances.mobile.eligibility.points.0}}
- {{people_admin.section_04.4_4_allowances.mobile.eligibility.points.1}}
- {{people_admin.section_04.4_4_allowances.mobile.eligibility.points.2}}
- {{people_admin.section_04.4_4_allowances.mobile.eligibility.points.3}}

{{people_admin.section_04.4_4_allowances.mobile.provision.title}}
- {{people_admin.section_04.4_4_allowances.mobile.provision.points.0}}
- {{people_admin.section_04.4_4_allowances.mobile.provision.points.1}}
- {{people_admin.section_04.4_4_allowances.mobile.provision.points.2}}
- {{people_admin.section_04.4_4_allowances.mobile.provision.points.3}}

{{people_admin.section_04.4_4_allowances.mobile.usage.title}}
- {{people_admin.section_04.4_4_allowances.mobile.usage.points.0}}
- {{people_admin.section_04.4_4_allowances.mobile.usage.points.1}}
- {{people_admin.section_04.4_4_allowances.mobile.usage.points.2}}
- {{people_admin.section_04.4_4_allowances.mobile.usage.points.3}}

{{people_admin.section_04.4_4_allowances.mobile.responsibilities.title}}
- {{people_admin.section_04.4_4_allowances.mobile.responsibilities.points.0}}
- {{people_admin.section_04.4_4_allowances.mobile.responsibilities.points.1}}
- {{people_admin.section_04.4_4_allowances.mobile.responsibilities.points.2}}
- {{people_admin.section_04.4_4_allowances.mobile.responsibilities.points.3}}

{{people_admin.section_04.4_4_allowances.mobile.separation.title}}
- {{people_admin.section_04.4_4_allowances.mobile.separation.points.0}}
- {{people_admin.section_04.4_4_allowances.mobile.separation.points.1}}

---

### {{people_admin.section_04.4_4_allowances.uniform.title}}

{{people_admin.section_04.4_4_allowances.uniform.eligibility}}

{{people_admin.section_04.4_4_allowances.uniform.provision.title}}
- {{people_admin.section_04.4_4_allowances.uniform.provision.points.0}}
- {{people_admin.section_04.4_4_allowances.uniform.provision.points.1}}
- {{people_admin.section_04.4_4_allowances.uniform.provision.points.2}}
- {{people_admin.section_04.4_4_allowances.uniform.provision.points.3}}

{{people_admin.section_04.4_4_allowances.uniform.requirements.title}}
- {{people_admin.section_04.4_4_allowances.uniform.requirements.points.0}}
- {{people_admin.section_04.4_4_allowances.uniform.requirements.points.1}}
- {{people_admin.section_04.4_4_allowances.uniform.requirements.points.2}}
- {{people_admin.section_04.4_4_allowances.uniform.requirements.points.3}}

{{people_admin.section_04.4_4_allowances.uniform.other.title}}
- {{people_admin.section_04.4_4_allowances.uniform.other.points.0}}
- {{people_admin.section_04.4_4_allowances.uniform.other.points.1}}

---

## {{people_admin.section_04.4_5_benefits.title}}

### {{people_admin.section_04.4_5_benefits.mandatory.title}}

{{people_admin.section_04.4_5_benefits.mandatory.cnss.title}}

{{people_admin.section_04.4_5_benefits.mandatory.cnss.coverage.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.coverage.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.coverage.points.1}}

{{people_admin.section_04.4_5_benefits.mandatory.cnss.contribution.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.contribution.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.contribution.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.contribution.points.2}}

{{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.points.3}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.responsibility.points.4}}

{{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.points.3}}
- {{people_admin.section_04.4_5_benefits.mandatory.cnss.benefits.points.4}}

---

{{people_admin.section_04.4_5_benefits.mandatory.injury.title}}

{{people_admin.section_04.4_5_benefits.mandatory.injury.included.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.included.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.included.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.included.points.2}}

{{people_admin.section_04.4_5_benefits.mandatory.injury.process.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.process.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.process.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.process.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.process.points.3}}
- {{people_admin.section_04.4_5_benefits.mandatory.injury.process.points.4}}

---

{{people_admin.section_04.4_5_benefits.mandatory.leave.title}}

{{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.1}}
  * {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.2}}
  * {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.3}}
  * {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.4}}
  * {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.5}}
  * {{people_admin.section_04.4_5_benefits.mandatory.leave.entitlement.points.6}}

{{people_admin.section_04.4_5_benefits.mandatory.leave.accrual.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.accrual.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.accrual.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.accrual.points.2}}

{{people_admin.section_04.4_5_benefits.mandatory.leave.unused.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.unused.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.unused.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.leave.unused.points.2}}

---

{{people_admin.section_04.4_5_benefits.mandatory.holidays.title}}

{{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.3}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.4}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.5}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.6}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.7}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.8}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.9}}
  * {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.10}}
  * {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.11}}
  * {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.12}}
  * {{people_admin.section_04.4_5_benefits.mandatory.holidays.observance.points.13}}

{{people_admin.section_04.4_5_benefits.mandatory.holidays.total}}

{{people_admin.section_04.4_5_benefits.mandatory.holidays.payment.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.payment.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.holidays.payment.points.1}}

---

{{people_admin.section_04.4_5_benefits.mandatory.sick.title}}

{{people_admin.section_04.4_5_benefits.mandatory.sick.entitlement.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.entitlement.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.entitlement.points.1}}

{{people_admin.section_04.4_5_benefits.mandatory.sick.policy.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.0}}
  * {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.1}}
  * {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.2}}
  * {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.3}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.4}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.policy.points.5}}

{{people_admin.section_04.4_5_benefits.mandatory.sick.process.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.process.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.process.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.process.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.sick.process.points.3}}

---

{{people_admin.section_04.4_5_benefits.mandatory.maternity.title}}

{{people_admin.section_04.4_5_benefits.mandatory.maternity.entitlement.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.entitlement.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.entitlement.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.entitlement.points.2}}

{{people_admin.section_04.4_5_benefits.mandatory.maternity.policy.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.policy.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.policy.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.policy.points.2}}

{{people_admin.section_04.4_5_benefits.mandatory.maternity.process.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.process.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.process.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.process.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.maternity.process.points.3}}

---

{{people_admin.section_04.4_5_benefits.mandatory.paternity.title}}

{{people_admin.section_04.4_5_benefits.mandatory.paternity.entitlement.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.paternity.entitlement.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.paternity.entitlement.points.1}}

{{people_admin.section_04.4_5_benefits.mandatory.paternity.process.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.paternity.process.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.paternity.process.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.paternity.process.points.2}}

---

{{people_admin.section_04.4_5_benefits.mandatory.thirteenth.title}}

{{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.title}}
- {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.0}}
- {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.1}}
- {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.2}}
- {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.3}}
  * {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.4}}
  * {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.5}}
- {{people_admin.section_04.4_5_benefits.mandatory.thirteenth.benefit.points.6}}


## {{people_admin.section_04.4_6_payroll.title}}

### {{people_admin.section_04.4_6_payroll.schedule.title}}

{{people_admin.section_04.4_6_payroll.schedule.frequency}}

{{people_admin.section_04.4_6_payroll.schedule.pay_date.title}}
- {{people_admin.section_04.4_6_payroll.schedule.pay_date.points.0}}
- {{people_admin.section_04.4_6_payroll.schedule.pay_date.points.1}}

{{people_admin.section_04.4_6_payroll.schedule.timeline.title}}

{{people_admin.section_04.4_6_payroll.schedule.timeline.days_28_30.title}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_28_30.points.0}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_28_30.points.1}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_28_30.points.2}}

{{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.title}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.points.0}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.points.1}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.points.2}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.points.3}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.days_1_3.points.4}}

{{people_admin.section_04.4_6_payroll.schedule.timeline.day_4.title}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_4.points.0}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_4.points.1}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_4.points.2}}

{{people_admin.section_04.4_6_payroll.schedule.timeline.day_5.title}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_5.points.0}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_5.points.1}}
- {{people_admin.section_04.4_6_payroll.schedule.timeline.day_5.points.2}}

---

### {{people_admin.section_04.4_6_payroll.payslip.title}}

{{people_admin.section_04.4_6_payroll.payslip.gross.title}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.0}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.1}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.2}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.3}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.4}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.5}}
- {{people_admin.section_04.4_6_payroll.payslip.gross.points.6}}

{{people_admin.section_04.4_6_payroll.payslip.deductions.title}}
- {{people_admin.section_04.4_6_payroll.payslip.deductions.points.0}}
- {{people_admin.section_04.4_6_payroll.payslip.deductions.points.1}}
- {{people_admin.section_04.4_6_payroll.payslip.deductions.points.2}}
- {{people_admin.section_04.4_6_payroll.payslip.deductions.points.3}}
- {{people_admin.section_04.4_6_payroll.payslip.deductions.points.4}}

{{people_admin.section_04.4_6_payroll.payslip.net.title}}
- {{people_admin.section_04.4_6_payroll.payslip.net.points.0}}
- {{people_admin.section_04.4_6_payroll.payslip.net.points.1}}
- {{people_admin.section_04.4_6_payroll.payslip.net.points.2}}

{{people_admin.section_04.4_6_payroll.payslip.employer.title}}
- {{people_admin.section_04.4_6_payroll.payslip.employer.points.0}}
- {{people_admin.section_04.4_6_payroll.payslip.employer.points.1}}

{{people_admin.section_04.4_6_payroll.payslip.ytd.title}}
- {{people_admin.section_04.4_6_payroll.payslip.ytd.points.0}}
- {{people_admin.section_04.4_6_payroll.payslip.ytd.points.1}}
- {{people_admin.section_04.4_6_payroll.payslip.ytd.points.2}}

---

### {{people_admin.section_04.4_6_payroll.tax.title}}

{{people_admin.section_04.4_6_payroll.tax.rates.title}}
- {{people_admin.section_04.4_6_payroll.tax.rates.points.0}}
- {{people_admin.section_04.4_6_payroll.tax.rates.points.1}}
- {{people_admin.section_04.4_6_payroll.tax.rates.points.2}}
- {{people_admin.section_04.4_6_payroll.tax.rates.points.3}}

{{people_admin.section_04.4_6_payroll.tax.responsibility.title}}
- {{people_admin.section_04.4_6_payroll.tax.responsibility.points.0}}
- {{people_admin.section_04.4_6_payroll.tax.responsibility.points.1}}
- {{people_admin.section_04.4_6_payroll.tax.responsibility.points.2}}
- {{people_admin.section_04.4_6_payroll.tax.responsibility.points.3}}

---

### {{people_admin.section_04.4_6_payroll.deductions.title}}

{{people_admin.section_04.4_6_payroll.deductions.allowed.title}}
- {{people_admin.section_04.4_6_payroll.deductions.allowed.points.0}}
- {{people_admin.section_04.4_6_payroll.deductions.allowed.points.1}}
- {{people_admin.section_04.4_6_payroll.deductions.allowed.points.2}}
- {{people_admin.section_04.4_6_payroll.deductions.allowed.points.3}}
- {{people_admin.section_04.4_6_payroll.deductions.allowed.points.4}}

{{people_admin.section_04.4_6_payroll.deductions.not_allowed.title}}
- {{people_admin.section_04.4_6_payroll.deductions.not_allowed.points.0}}
- {{people_admin.section_04.4_6_payroll.deductions.not_allowed.points.1}}
- {{people_admin.section_04.4_6_payroll.deductions.not_allowed.points.2}}

{{people_admin.section_04.4_6_payroll.deductions.process.title}}
- {{people_admin.section_04.4_6_payroll.deductions.process.points.0}}
- {{people_admin.section_04.4_6_payroll.deductions.process.points.1}}
- {{people_admin.section_04.4_6_payroll.deductions.process.points.2}}
- {{people_admin.section_04.4_6_payroll.deductions.process.points.3}}

---

### {{people_admin.section_04.4_6_payroll.advances.title}}

{{people_admin.section_04.4_6_payroll.advances.policy}}

{{people_admin.section_04.4_6_payroll.advances.eligibility.title}}
- {{people_admin.section_04.4_6_payroll.advances.eligibility.points.0}}
- {{people_admin.section_04.4_6_payroll.advances.eligibility.points.1}}
- {{people_admin.section_04.4_6_payroll.advances.eligibility.points.2}}

{{people_admin.section_04.4_6_payroll.advances.amount.title}}
- {{people_admin.section_04.4_6_payroll.advances.amount.points.0}}
- {{people_admin.section_04.4_6_payroll.advances.amount.points.1}}

{{people_admin.section_04.4_6_payroll.advances.repayment.title}}
- {{people_admin.section_04.4_6_payroll.advances.repayment.points.0}}
- {{people_admin.section_04.4_6_payroll.advances.repayment.points.1}}
- {{people_admin.section_04.4_6_payroll.advances.repayment.points.2}}

{{people_admin.section_04.4_6_payroll.advances.process.title}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.0}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.1}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.2}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.3}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.4}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.5}}
- {{people_admin.section_04.4_6_payroll.advances.process.points.6}}

---

### {{people_admin.section_04.4_6_payroll.end_of_year.title}}

{{people_admin.section_04.4_6_payroll.end_of_year.certificate.title}}
- {{people_admin.section_04.4_6_payroll.end_of_year.certificate.points.0}}
- {{people_admin.section_04.4_6_payroll.end_of_year.certificate.points.1}}
- {{people_admin.section_04.4_6_payroll.end_of_year.certificate.points.2}}
- {{people_admin.section_04.4_6_payroll.end_of_year.certificate.points.3}}

---

### {{people_admin.section_04.4_6_payroll.retention.title}}

{{people_admin.section_04.4_6_payroll.retention.rules.title}}
- {{people_admin.section_04.4_6_payroll.retention.rules.points.0}}
- {{people_admin.section_04.4_6_payroll.retention.rules.points.1}}
- {{people_admin.section_04.4_6_payroll.retention.rules.points.2}}
- {{people_admin.section_04.4_6_payroll.retention.rules.points.3}}
- {{people_admin.section_04.4_6_payroll.retention.rules.points.4}}

{{people_admin.section_04.4_6_payroll.retention.storage.title}}
- {{people_admin.section_04.4_6_payroll.retention.storage.points.0}}
- {{people_admin.section_04.4_6_payroll.retention.storage.points.1}}
- {{people_admin.section_04.4_6_payroll.retention.storage.points.2}}



# {{people_admin.section_05.title}}

## {{people_admin.section_05.5_1_onboarding.title}}

### {{people_admin.section_05.5_1_onboarding.philosophy.title}}

{{people_admin.section_05.5_1_onboarding.philosophy.goal}}

{{people_admin.section_05.5_1_onboarding.philosophy.objectives.title}}
- {{people_admin.section_05.5_1_onboarding.philosophy.objectives.points.0}}
- {{people_admin.section_05.5_1_onboarding.philosophy.objectives.points.1}}
- {{people_admin.section_05.5_1_onboarding.philosophy.objectives.points.2}}
- {{people_admin.section_05.5_1_onboarding.philosophy.objectives.points.3}}
- {{people_admin.section_05.5_1_onboarding.philosophy.objectives.points.4}}

{{people_admin.section_05.5_1_onboarding.philosophy.duration}}

---

### {{people_admin.section_05.5_1_onboarding.program.title}}

{{people_admin.section_05.5_1_onboarding.program.note}}

---

### {{people_admin.section_05.5_1_onboarding.program.technician.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.week_1.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.week_1.objectives}}

{{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.1}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.2}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.3}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.4}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.activities.points.5}}

{{people_admin.section_05.5_1_onboarding.program.technician.week_1.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.deliverables.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.week_1.deliverables.points.1}}

---

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.objectives}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.0}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.1}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.2}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.3}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.4}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.5}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.6}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.7}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.8}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.9}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.10}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.11}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.12}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.13}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.14}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.15}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.activities.points.16}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.deliverables.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_2_4.deliverables.points.1}}

---

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.objectives}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.0}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.1}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.2}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.3}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.4}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.5}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.6}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.7}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.8}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.9}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.10}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.11}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.12}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.13}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.14}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.15}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.16}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.17}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.18}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.19}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.20}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.activities.points.21}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.deliverables.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_5_8.deliverables.points.1}}

---

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.objectives}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.0}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.1}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.2}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.3}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.4}}
  
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.5}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.6}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.7}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.8}}
  * {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.activities.points.9}}

{{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.review.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.review.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.review.points.1}}
- {{people_admin.section_05.5_1_onboarding.program.technician.weeks_9_12.review.points.2}}

---

{{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.title}}

{{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.objectives}}

{{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.points.1}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.points.2}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.points.3}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.activities.points.4}}

{{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.conversion.title}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.conversion.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.technician.months_4_6.conversion.points.1}}

---

### {{people_admin.section_05.5_1_onboarding.program.sales.title}}

{{people_admin.section_05.5_1_onboarding.program.sales.week_1.title}}

{{people_admin.section_05.5_1_onboarding.program.sales.week_1.objectives}}

{{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.1}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.2}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.3}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.4}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.5}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.week_1.activities.points.6}}

{{people_admin.section_05.5_1_onboarding.program.sales.week_1.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.week_1.deliverables.points.0}}

---

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.title}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.objectives}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.0}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.1}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.2}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.3}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.4}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.5}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.6}}
  
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.7}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.8}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.9}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.10}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.11}}
  * {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.activities.points.12}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.deliverables.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_2_3.deliverables.points.1}}

---

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.title}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.objectives}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.points.1}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.points.2}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.points.3}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.activities.points.4}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.deliverables.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.deliverables.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.deliverables.points.1}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_4_6.deliverables.points.2}}

---

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_7_8.title}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_7_8.objectives}}

{{people_admin.section_05.5_1_onboarding.program.sales.weeks_7_8.activities.title}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_7_8.activities.points.0}}
- {{people_admin.section_05.5_1_onboarding.program.sales.weeks_7_8.activities.points.1}}



# {{people_admin.section_06.title}}

## {{people_admin.section_06.6_1_performance_cycle.title}}
- {{people_admin.section_06.6_1_performance_cycle.points.0}}
- {{people_admin.section_06.6_1_performance_cycle.points.1}}
- {{people_admin.section_06.6_1_performance_cycle.points.2}}

## {{people_admin.section_06.6_2_evaluation_criteria.title}}
{{people_admin.section_06.6_2_evaluation_criteria.points.0}}
{{people_admin.section_06.6_2_evaluation_criteria.points.1}}
{{people_admin.section_06.6_2_evaluation_criteria.points.2}}
{{people_admin.section_06.6_2_evaluation_criteria.points.3}}

## {{people_admin.section_06.6_3_ratings.title}}
- {{people_admin.section_06.6_3_ratings.points.0}}
- {{people_admin.section_06.6_3_ratings.points.1}}
- {{people_admin.section_06.6_3_ratings.points.2}}

## {{people_admin.section_06.6_4_recognition.title}}
- {{people_admin.section_06.6_4_recognition.points.0}}
- {{people_admin.section_06.6_4_recognition.points.1}}
- {{people_admin.section_06.6_4_recognition.points.2}}


# {{people_admin.section_07.title}}

## {{people_admin.section_07.7_1_working_hours.title}}

### {{people_admin.section_07.7_1_working_hours.standard_hours.title}}

{{people_admin.section_07.7_1_working_hours.standard_hours.full_time_note}}

{{people_admin.section_07.7_1_working_hours.standard_hours.schedule.monday_friday}}

{{people_admin.section_07.7_1_working_hours.standard_hours.schedule.saturday}}

{{people_admin.section_07.7_1_working_hours.standard_hours.schedule.total}}

{{people_admin.section_07.7_1_working_hours.standard_hours.note}}

{{people_admin.section_07.7_1_working_hours.standard_hours.break_schedule.title}}
- {{people_admin.section_07.7_1_working_hours.standard_hours.break_schedule.points.0}}
- {{people_admin.section_07.7_1_working_hours.standard_hours.break_schedule.points.1}}
- {{people_admin.section_07.7_1_working_hours.standard_hours.break_schedule.points.2}}
- {{people_admin.section_07.7_1_working_hours.standard_hours.break_schedule.points.3}}

---

## {{people_admin.section_07.7_2_tracking.title}}

### {{people_admin.section_07.7_2_tracking.solution.title}}

{{people_admin.section_07.7_2_tracking.solution.challenge.title}}
- {{people_admin.section_07.7_2_tracking.solution.challenge.points.0}}
- {{people_admin.section_07.7_2_tracking.solution.challenge.points.1}}
- {{people_admin.section_07.7_2_tracking.solution.challenge.points.2}}
- {{people_admin.section_07.7_2_tracking.solution.challenge.points.3}}

{{people_admin.section_07.7_2_tracking.solution.proposed_solution}}

---

### {{people_admin.section_07.7_2_tracking.tier_1.title}}

{{people_admin.section_07.7_2_tracking.tier_1.who}}

{{people_admin.section_07.7_2_tracking.tier_1.why.title}}
- {{people_admin.section_07.7_2_tracking.tier_1.why.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_1.why.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_1.why.points.2}}
- {{people_admin.section_07.7_2_tracking.tier_1.why.points.3}}

{{people_admin.section_07.7_2_tracking.tier_1.method}}

{{people_admin.section_07.7_2_tracking.tier_1.workflow.title}}

{{people_admin.section_07.7_2_tracking.tier_1.workflow.start.title}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.1}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.2}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.3}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.4}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.5}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.start.steps.6}}

{{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.title}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.1}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.2}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.3}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.4}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.arrive.steps.5}}

{{people_admin.section_07.7_2_tracking.tier_1.workflow.depart.title}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.depart.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.depart.steps.1}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.depart.steps.2}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.depart.steps.3}}

{{people_admin.section_07.7_2_tracking.tier_1.workflow.end.title}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.1}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.2}}
{{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.3}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.4}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.5}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.6}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.7}}
   - {{people_admin.section_07.7_2_tracking.tier_1.workflow.end.steps.8}}

{{people_admin.section_07.7_2_tracking.tier_1.benefits.title}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.2}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.3}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.4}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.5}}
- {{people_admin.section_07.7_2_tracking.tier_1.benefits.points.6}}

{{people_admin.section_07.7_2_tracking.tier_1.privacy.title}}
- {{people_admin.section_07.7_2_tracking.tier_1.privacy.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_1.privacy.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_1.privacy.points.2}}
- {{people_admin.section_07.7_2_tracking.tier_1.privacy.points.3}}

{{people_admin.section_07.7_2_tracking.tier_1.exceptions.title}}
- {{people_admin.section_07.7_2_tracking.tier_1.exceptions.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_1.exceptions.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_1.exceptions.points.2}}

---

### {{people_admin.section_07.7_2_tracking.tier_2.title}}

{{people_admin.section_07.7_2_tracking.tier_2.who}}

{{people_admin.section_07.7_2_tracking.tier_2.why.title}}
- {{people_admin.section_07.7_2_tracking.tier_2.why.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_2.why.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_2.why.points.2}}

{{people_admin.section_07.7_2_tracking.tier_2.method}}

{{people_admin.section_07.7_2_tracking.tier_2.workflow.title}}

{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.title}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.1}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.2}}
   - {{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.3}}
   - {{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.4}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_in.steps.5}}

{{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.title}}
- {{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.points.0}}
  * {{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.points.1}}
  * {{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.points.2}}
  * {{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.points.3}}
- {{people_admin.section_07.7_2_tracking.tier_2.workflow.during_day.points.4}}

{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_out.title}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_out.steps.0}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_out.steps.1}}
{{people_admin.section_07.7_2_tracking.tier_2.workflow.check_out.steps.2}}

{{people_admin.section_07.7_2_tracking.tier_2.benefits.title}}
- {{people_admin.section_07.7_2_tracking.tier_2.benefits.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_2.benefits.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_2.benefits.points.2}}
- {{people_admin.section_07.7_2_tracking.tier_2.benefits.points.3}}
- {{people_admin.section_07.7_2_tracking.tier_2.benefits.points.4}}

{{people_admin.section_07.7_2_tracking.tier_2.half_day.title}}
- {{people_admin.section_07.7_2_tracking.tier_2.half_day.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_2.half_day.points.1}}

---

### {{people_admin.section_07.7_2_tracking.tier_3.title}}

{{people_admin.section_07.7_2_tracking.tier_3.who}}

{{people_admin.section_07.7_2_tracking.tier_3.why.title}}
- {{people_admin.section_07.7_2_tracking.tier_3.why.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_3.why.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_3.why.points.2}}

{{people_admin.section_07.7_2_tracking.tier_3.method}}

{{people_admin.section_07.7_2_tracking.tier_3.options.physical.title}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.physical.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.physical.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.physical.points.2}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.physical.points.3}}

{{people_admin.section_07.7_2_tracking.tier_3.options.digital.title}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.digital.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.digital.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_3.options.digital.points.2}}

{{people_admin.section_07.7_2_tracking.tier_3.benefits.title}}
- {{people_admin.section_07.7_2_tracking.tier_3.benefits.points.0}}
- {{people_admin.section_07.7_2_tracking.tier_3.benefits.points.1}}
- {{people_admin.section_07.7_2_tracking.tier_3.benefits.points.2}}

---

### {{people_admin.section_07.7_2_tracking.requirements.title}}

{{people_admin.section_07.7_2_tracking.requirements.technical.title}}

{{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.title}}
{{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.gps.title}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.gps.points.0}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.gps.points.1}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.gps.points.2}}

{{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.check_in_out.title}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.check_in_out.points.0}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.check_in_out.points.1}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.check_in_out.points.2}}

{{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.timesheet.title}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.timesheet.points.0}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.timesheet.points.1}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.timesheet.points.2}}

{{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.dashboard.title}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.dashboard.points.0}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.dashboard.points.1}}
- {{people_admin.section_07.7_2_tracking.requirements.technical.mobile_app.dashboard.points.2}}

{{people_admin.section_07.7_2_tracking.requirements.legal.title}}
- {{people_admin.section_07.7_2_tracking.requirements.legal.points.0}}
- {{people_admin.section_07.7_2_tracking.requirements.legal.points.1}}
- {{people_admin.section_07.7_2_tracking.requirements.legal.points.2}}
- {{people_admin.section_07.7_2_tracking.requirements.legal.points.3}}
- {{people_admin.section_07.7_2_tracking.requirements.legal.points.4}}

---

### {{people_admin.section_07.7_2_tracking.approval.title}}

{{people_admin.section_07.7_2_tracking.approval.daily.title}}
- {{people_admin.section_07.7_2_tracking.approval.daily.points.0}}
- {{people_admin.section_07.7_2_tracking.approval.daily.points.1}}
- {{people_admin.section_07.7_2_tracking.approval.daily.points.2}}
- {{people_admin.section_07.7_2_tracking.approval.daily.points.3}}

{{people_admin.section_07.7_2_tracking.approval.weekly.title}}
- {{people_admin.section_07.7_2_tracking.approval.weekly.points.0}}
- {{people_admin.section_07.7_2_tracking.approval.weekly.points.1}}
- {{people_admin.section_07.7_2_tracking.approval.weekly.points.2}}
- {{people_admin.section_07.7_2_tracking.approval.weekly.points.3}}

{{people_admin.section_07.7_2_tracking.approval.monthly.title}}
- {{people_admin.section_07.7_2_tracking.approval.monthly.points.0}}
- {{people_admin.section_07.7_2_tracking.approval.monthly.points.1}}
- {{people_admin.section_07.7_2_tracking.approval.monthly.points.2}}

---

## {{people_admin.section_07.7_3_leave.title}}

### {{people_admin.section_07.7_3_leave.annual.title}}

{{people_admin.section_07.7_3_leave.annual.entitlement.title}}

{{people_admin.section_07.7_3_leave.annual.entitlement.base.title}}
- {{people_admin.section_07.7_3_leave.annual.entitlement.base.points.0}}
- {{people_admin.section_07.7_3_leave.annual.entitlement.base.points.1}}
- {{people_admin.section_07.7_3_leave.annual.entitlement.base.points.2}}

{{people_admin.section_07.7_3_leave.annual.entitlement.seniority.title}}
- {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.rule}}
- Examples:
  * {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.examples.points.0}}
  * {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.examples.points.1}}
  * {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.examples.points.2}}
  * {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.examples.points.3}}
  * {{people_admin.section_07.7_3_leave.annual.entitlement.seniority.examples.points.4}}

{{people_admin.section_07.7_3_leave.annual.accrual.title}}
- {{people_admin.section_07.7_3_leave.annual.accrual.points.0}}
- {{people_admin.section_07.7_3_leave.annual.accrual.points.1}}
- {{people_admin.section_07.7_3_leave.annual.accrual.points.2}}

{{people_admin.section_07.7_3_leave.annual.leave_year}}

{{people_admin.section_07.7_3_leave.annual.example.title}}
- {{people_admin.section_07.7_3_leave.annual.example.points.0}}
- {{people_admin.section_07.7_3_leave.annual.example.points.1}}
- {{people_admin.section_07.7_3_leave.annual.example.points.2}}

---

**Usage Rules:**

{{people_admin.section_07.7_3_leave.annual.usage_rules.timing.title}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.timing.points.0}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.timing.points.1}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.timing.points.2}}

{{people_admin.section_07.7_3_leave.annual.usage_rules.duration.title}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.duration.points.0}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.duration.points.1}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.duration.points.2}}

{{people_admin.section_07.7_3_leave.annual.usage_rules.carryover.title}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.carryover.points.0}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.carryover.points.1}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.carryover.points.2}}

{{people_admin.section_07.7_3_leave.annual.usage_rules.payment.title}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.payment.points.0}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.payment.points.1}}
- {{people_admin.section_07.7_3_leave.annual.usage_rules.payment.points.2}}

---

{{people_admin.section_07.7_3_leave.annual.notice_period.title}}
- {{people_admin.section_07.7_3_leave.annual.notice_period.points.0}}
- {{people_admin.section_07.7_3_leave.annual.notice_period.points.1}}
- {{people_admin.section_07.7_3_leave.annual.notice_period.points.2}}
- {{people_admin.section_07.7_3_leave.annual.notice_period.points.3}}

---

### {{people_admin.section_07.7_3_leave.public_holidays.title}}

{{people_admin.section_07.7_3_leave.public_holidays.policy}}

{{people_admin.section_07.7_3_leave.public_holidays.fixed.title}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.0}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.1}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.2}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.3}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.4}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.5}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.6}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.7}}
- {{people_admin.section_07.7_3_leave.public_holidays.fixed.points.8}}

{{people_admin.section_07.7_3_leave.public_holidays.islamic.title}}
- {{people_admin.section_07.7_3_leave.public_holidays.islamic.points.0}}
- {{people_admin.section_07.7_3_leave.public_holidays.islamic.points.1}}
- {{people_admin.section_07.7_3_leave.public_holidays.islamic.points.2}}
- {{people_admin.section_07.7_3_leave.public_holidays.islamic.points.3}}

{{people_admin.section_07.7_3_leave.public_holidays.total}}

{{people_admin.section_07.7_3_leave.public_holidays.payment.title}}
- {{people_admin.section_07.7_3_leave.public_holidays.payment.points.0}}
- {{people_admin.section_07.7_3_leave.public_holidays.payment.points.1}}
- {{people_admin.section_07.7_3_leave.public_holidays.payment.points.2}}
- {{people_admin.section_07.7_3_leave.public_holidays.payment.points.3}}

{{people_admin.section_07.7_3_leave.public_holidays.working.title}}
- {{people_admin.section_07.7_3_leave.public_holidays.working.points.0}}
- {{people_admin.section_07.7_3_leave.public_holidays.working.points.1}}
- {{people_admin.section_07.7_3_leave.public_holidays.working.points.2}}

---

### {{people_admin.section_07.7_3_leave.sick_leave.title}}

{{people_admin.section_07.7_3_leave.sick_leave.entitlement.title}}

{{people_admin.section_07.7_3_leave.sick_leave.entitlement.with_cert.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.entitlement.with_cert.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.entitlement.with_cert.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.entitlement.with_cert.points.2}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.title}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.note}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.month_1.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.month_1.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.month_1.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.month_1.points.2}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.months_2_3.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.months_2_3.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.months_2_3.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.months_2_3.points.2}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.after_90.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.after_90.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.after_90.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.after_90.points.2}}

{{people_admin.section_07.7_3_leave.sick_leave.payment_structure.summary.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.summary.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.summary.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.payment_structure.summary.points.2}}

{{people_admin.section_07.7_3_leave.sick_leave.without_cert.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.without_cert.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.without_cert.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.without_cert.points.2}}

---

{{people_admin.section_07.7_3_leave.sick_leave.procedure.title}}

{{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.title}}
{{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.0}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.1}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.2}}
{{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.3}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.4}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.5}}
{{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.6}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.7}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.8}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.9}}
{{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.10}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.11}}
   - {{people_admin.section_07.7_3_leave.sick_leave.procedure.if_sick.steps.12}}

{{people_admin.section_07.7_3_leave.sick_leave.procedure.without_cert_consequence.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.without_cert_consequence.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.without_cert_consequence.points.1}}

{{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.points.0}}
  * {{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.points.1}}
  * {{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.points.2}}
  * {{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.points.3}}
  * {{people_admin.section_07.7_3_leave.sick_leave.procedure.abuse.points.4}}

{{people_admin.section_07.7_3_leave.sick_leave.procedure.incapacity.title}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.incapacity.points.0}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.incapacity.points.1}}
- {{people_admin.section_07.7_3_leave.sick_leave.procedure.incapacity.points.2}}

---

### {{people_admin.section_07.7_3_leave.maternity.title}}

{{people_admin.section_07.7_3_leave.maternity.entitlement.title}}
- {{people_admin.section_07.7_3_leave.maternity.entitlement.points.0}}
- {{people_admin.section_07.7_3_leave.maternity.entitlement.points.1}}

{{people_admin.section_07.7_3_leave.maternity.payment.title}}
- {{people_admin.section_07.7_3_leave.maternity.payment.points.0}}
- {{people_admin.section_07.7_3_leave.maternity.payment.points.1}}
- {{people_admin.section_07.7_3_leave.maternity.payment.points.2}}

{{people_admin.section_07.7_3_leave.maternity.job_protection.title}}
- {{people_admin.section_07.7_3_leave.maternity.job_protection.points.0}}
- {{people_admin.section_07.7_3_leave.maternity.job_protection.points.1}}
- {{people_admin.section_07.7_3_leave.maternity.job_protection.points.2}}

---

{{people_admin.section_07.7_3_leave.maternity.procedure.title}}

{{people_admin.section_07.7_3_leave.maternity.procedure.steps.0}}
   - {{people_admin.section_07.7_3_leave.maternity.procedure.steps.1}}
   - {{people_admin.section_07.7_3_leave.maternity.procedure.steps.2}}
{{people_admin.section_07.7_3_leave.maternity.procedure.steps.3}}
{{people_admin.section_07.7_3_leave.maternity.procedure.steps.4}}
{{people_admin.section_07.7_3_leave.maternity.procedure.steps.5}}
{{people_admin.section_07.7_3_leave.maternity.procedure.steps.6}}
{{people_admin.section_07.7_3_leave.maternity.procedure.steps.7}}
   - {{people_admin.section_07.7_3_leave.maternity.procedure.steps.8}}
   - {{people_admin.section_07.7_3_leave.maternity.procedure.steps.9}}

{{people_admin.section_07.7_3_leave.maternity.breastfeeding.title}}
- {{people_admin.section_07.7_3_leave.maternity.breastfeeding.points.0}}
- {{people_admin.section_07.7_3_leave.maternity.breastfeeding.points.1}}
- {{people_admin.section_07.7_3_leave.maternity.breastfeeding.points.2}}

---

### {{people_admin.section_07.7_3_leave.paternity.title}}

{{people_admin.section_07.7_3_leave.paternity.entitlement.title}}
- {{people_admin.section_07.7_3_leave.paternity.entitlement.points.0}}
- {{people_admin.section_07.7_3_leave.paternity.entitlement.points.1}}

{{people_admin.section_07.7_3_leave.paternity.procedure.title}}
{{people_admin.section_07.7_3_leave.paternity.procedure.steps.0}}
{{people_admin.section_07.7_3_leave.paternity.procedure.steps.1}}
{{people_admin.section_07.7_3_leave.paternity.procedure.steps.2}}
{{people_admin.section_07.7_3_leave.paternity.procedure.steps.3}}

---

### {{people_admin.section_07.7_3_leave.compassionate.title}}

{{people_admin.section_07.7_3_leave.compassionate.subtitle}}

{{people_admin.section_07.7_3_leave.compassionate.death.title}}
- {{people_admin.section_07.7_3_leave.compassionate.death.points.0}}
- {{people_admin.section_07.7_3_leave.compassionate.death.points.1}}
- {{people_admin.section_07.7_3_leave.compassionate.death.points.2}}
- {{people_admin.section_07.7_3_leave.compassionate.death.points.3}}

{{people_admin.section_07.7_3_leave.compassionate.marriage.title}}
- {{people_admin.section_07.7_3_leave.compassionate.marriage.points.0}}
- {{people_admin.section_07.7_3_leave.compassionate.marriage.points.1}}

{{people_admin.section_07.7_3_leave.compassionate.emergency.title}}
- {{people_admin.section_07.7_3_leave.compassionate.emergency.points.0}}
- {{people_admin.section_07.7_3_leave.compassionate.emergency.points.1}}

{{people_admin.section_07.7_3_leave.compassionate.procedure.title}}
- {{people_admin.section_07.7_3_leave.compassionate.procedure.points.0}}
- {{people_admin.section_07.7_3_leave.compassionate.procedure.points.1}}
- {{people_admin.section_07.7_3_leave.compassionate.procedure.points.2}}

---

### {{people_admin.section_07.7_3_leave.unpaid.title}}

{{people_admin.section_07.7_3_leave.unpaid.discretion}}

{{people_admin.section_07.7_3_leave.unpaid.reasons.title}}
- {{people_admin.section_07.7_3_leave.unpaid.reasons.points.0}}
- {{people_admin.section_07.7_3_leave.unpaid.reasons.points.1}}
- {{people_admin.section_07.7_3_leave.unpaid.reasons.points.2}}
- {{people_admin.section_07.7_3_leave.unpaid.reasons.points.3}}

{{people_admin.section_07.7_3_leave.unpaid.procedure.title}}
{{people_admin.section_07.7_3_leave.unpaid.procedure.steps.0}}
{{people_admin.section_07.7_3_leave.unpaid.procedure.steps.1}}
{{people_admin.section_07.7_3_leave.unpaid.procedure.steps.2}}
{{people_admin.section_07.7_3_leave.unpaid.procedure.steps.3}}
{{people_admin.section_07.7_3_leave.unpaid.procedure.steps.4}}

{{people_admin.section_07.7_3_leave.unpaid.limitations.title}}
- {{people_admin.section_07.7_3_leave.unpaid.limitations.points.0}}
- {{people_admin.section_07.7_3_leave.unpaid.limitations.points.1}}
- {{people_admin.section_07.7_3_leave.unpaid.limitations.points.2}}

---

### {{people_admin.section_07.7_3_leave.hajj.title}}

{{people_admin.section_07.7_3_leave.hajj.subtitle}}
- {{people_admin.section_07.7_3_leave.hajj.points.0}}
- {{people_admin.section_07.7_3_leave.hajj.points.1}}
- {{people_admin.section_07.7_3_leave.hajj.points.2}}
- {{people_admin.section_07.7_3_leave.hajj.points.3}}
- {{people_admin.section_07.7_3_leave.hajj.points.4}}

---

## {{people_admin.section_07.7_4_request_process.title}}

### {{people_admin.section_07.7_4_request_process.procedure.title}}

{{people_admin.section_07.7_4_request_process.procedure.step_1.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_1.points.0}}
- {{people_admin.section_07.7_4_request_process.procedure.step_1.points.1}}
- {{people_admin.section_07.7_4_request_process.procedure.step_1.points.2}}

{{people_admin.section_07.7_4_request_process.procedure.step_2.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_2.points.0}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.1}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.2}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.3}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.4}}
- {{people_admin.section_07.7_4_request_process.procedure.step_2.points.5}}
- {{people_admin.section_07.7_4_request_process.procedure.step_2.points.6}}
- {{people_admin.section_07.7_4_request_process.procedure.step_2.points.7}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.8}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.9}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.10}}
  * {{people_admin.section_07.7_4_request_process.procedure.step_2.points.11}}

{{people_admin.section_07.7_4_request_process.procedure.step_3.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_3.points.0}}
- {{people_admin.section_07.7_4_request_process.procedure.step_3.points.1}}
- {{people_admin.section_07.7_4_request_process.procedure.step_3.points.2}}
- {{people_admin.section_07.7_4_request_process.procedure.step_3.points.3}}

{{people_admin.section_07.7_4_request_process.procedure.step_4.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_4.points.0}}
- {{people_admin.section_07.7_4_request_process.procedure.step_4.points.1}}
- {{people_admin.section_07.7_4_request_process.procedure.step_4.points.2}}
- {{people_admin.section_07.7_4_request_process.procedure.step_4.points.3}}

{{people_admin.section_07.7_4_request_process.procedure.step_5.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_5.points.0}}
- {{people_admin.section_07.7_4_request_process.procedure.step_5.points.1}}
- {{people_admin.section_07.7_4_request_process.procedure.step_5.points.2}}
- {{people_admin.section_07.7_4_request_process.procedure.step_5.points.3}}
- {{people_admin.section_07.7_4_request_process.procedure.step_5.points.4}}

{{people_admin.section_07.7_4_request_process.procedure.step_6.title}}
- {{people_admin.section_07.7_4_request_process.procedure.step_6.points.0}}
- {{people_admin.section_07.7_4_request_process.procedure.step_6.points.1}}
- {{people_admin.section_07.7_4_request_process.procedure.step_6.points.2}}

---

### {{people_admin.section_07.7_4_request_process.criteria.title}}

{{people_admin.section_07.7_4_request_process.criteria.approved.title}}
- {{people_admin.section_07.7_4_request_process.criteria.approved.points.0}}
- {{people_admin.section_07.7_4_request_process.criteria.approved.points.1}}
- {{people_admin.section_07.7_4_request_process.criteria.approved.points.2}}
- {{people_admin.section_07.7_4_request_process.criteria.approved.points.3}}
- {{people_admin.section_07.7_4_request_process.criteria.approved.points.4}}

{{people_admin.section_07.7_4_request_process.criteria.denied.title}}
- {{people_admin.section_07.7_4_request_process.criteria.denied.points.0}}
- {{people_admin.section_07.7_4_request_process.criteria.denied.points.1}}
- {{people_admin.section_07.7_4_request_process.criteria.denied.points.2}}
- {{people_admin.section_07.7_4_request_process.criteria.denied.points.3}}
- {{people_admin.section_07.7_4_request_process.criteria.denied.points.4}}

{{people_admin.section_07.7_4_request_process.criteria.appeal.title}}
- {{people_admin.section_07.7_4_request_process.criteria.appeal.points.0}}
- {{people_admin.section_07.7_4_request_process.criteria.appeal.points.1}}
- {{people_admin.section_07.7_4_request_process.criteria.appeal.points.2}}

---

### {{people_admin.section_07.7_4_request_process.tracking.title}}

{{people_admin.section_07.7_4_request_process.tracking.admin.title}}
- {{people_admin.section_07.7_4_request_process.tracking.admin.points.0}}
- {{people_admin.section_07.7_4_request_process.tracking.admin.points.1}}
- {{people_admin.section_07.7_4_request_process.tracking.admin.points.2}}

{{people_admin.section_07.7_4_request_process.tracking.employee.title}}
- {{people_admin.section_07.7_4_request_process.tracking.employee.points.0}}
- {{people_admin.section_07.7_4_request_process.tracking.employee.points.1}}

{{people_admin.section_07.7_4_request_process.tracking.payslip.title}}
- {{people_admin.section_07.7_4_request_process.tracking.payslip.points.0}}
- {{people_admin.section_07.7_4_request_process.tracking.payslip.points.1}}

---

## {{people_admin.section_07.7_5_absence.title}}

### {{people_admin.section_07.7_5_absence.types.title}}

{{people_admin.section_07.7_5_absence.types.authorized.title}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.0}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.1}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.2}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.3}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.4}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.5}}
- {{people_admin.section_07.7_5_absence.types.authorized.points.6}}

{{people_admin.section_07.7_5_absence.types.unauthorized.title}}
- {{people_admin.section_07.7_5_absence.types.unauthorized.points.0}}
- {{people_admin.section_07.7_5_absence.types.unauthorized.points.1}}
- {{people_admin.section_07.7_5_absence.types.unauthorized.points.2}}
- {{people_admin.section_07.7_5_absence.types.unauthorized.points.3}}
- {{people_admin.section_07.7_5_absence.types.unauthorized.points.4}}

---

### {{people_admin.section_07.7_5_absence.notification.title}}

{{people_admin.section_07.7_5_absence.notification.unable.title}}
- {{people_admin.section_07.7_5_absence.notification.unable.points.0}}
- {{people_admin.section_07.7_5_absence.notification.unable.points.1}}
- {{people_admin.section_07.7_5_absence.notification.unable.points.2}}
- {{people_admin.section_07.7_5_absence.notification.unable.points.3}}

{{people_admin.section_07.7_5_absence.notification.continued.title}}
- {{people_admin.section_07.7_5_absence.notification.continued.points.0}}
- {{people_admin.section_07.7_5_absence.notification.continued.points.1}}

---

### {{people_admin.section_07.7_5_absence.excessive.title}}

{{people_admin.section_07.7_5_absence.excessive.pattern.title}}
- {{people_admin.section_07.7_5_absence.excessive.pattern.points.0}}
- {{people_admin.section_07.7_5_absence.excessive.pattern.points.1}}
- {{people_admin.section_07.7_5_absence.excessive.pattern.points.2}}

{{people_admin.section_07.7_5_absence.excessive.response.title}}
{{people_admin.section_07.7_5_absence.excessive.response.steps.0}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.1}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.2}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.3}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.4}}
{{people_admin.section_07.7_5_absence.excessive.response.steps.5}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.6}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.7}}
   - {{people_admin.section_07.7_5_absence.excessive.response.steps.8}}
{{people_admin.section_07.7_5_absence.excessive.response.steps.9}}

{{people_admin.section_07.7_5_absence.excessive.medical.title}}
- {{people_admin.section_07.7_5_absence.excessive.medical.points.0}}
- {{people_admin.section_07.7_5_absence.excessive.medical.points.1}}
- {{people_admin.section_07.7_5_absence.excessive.medical.points.2}}
- {{people_admin.section_07.7_5_absence.excessive.medical.points.3}}

---

### {{people_admin.section_07.7_5_absence.returning.title}}

{{people_admin.section_07.7_5_absence.returning.medium.title}}
- {{people_admin.section_07.7_5_absence.returning.medium.points.0}}
- {{people_admin.section_07.7_5_absence.returning.medium.points.1}}
- {{people_admin.section_07.7_5_absence.returning.medium.points.2}}
- {{people_admin.section_07.7_5_absence.returning.medium.points.3}}

{{people_admin.section_07.7_5_absence.returning.long.title}}
- {{people_admin.section_07.7_5_absence.returning.long.points.0}}
- {{people_admin.section_07.7_5_absence.returning.long.points.1}}
- {{people_admin.section_07.7_5_absence.returning.long.points.2}}



# {{people_admin.section_08.title}}

## {{people_admin.section_08.8_1_code_of_conduct.title}}

### {{people_admin.section_08.8_1_code_of_conduct.intro}}

{{people_admin.section_08.8_1_code_of_conduct.list_intro}}

{{people_admin.section_08.8_1_code_of_conduct.professionalism.title}}
- {{people_admin.section_08.8_1_code_of_conduct.professionalism.points.0}}
- {{people_admin.section_08.8_1_code_of_conduct.professionalism.points.1}}
- {{people_admin.section_08.8_1_code_of_conduct.professionalism.points.2}}
- {{people_admin.section_08.8_1_code_of_conduct.professionalism.points.3}}

{{people_admin.section_08.8_1_code_of_conduct.integrity.title}}
- {{people_admin.section_08.8_1_code_of_conduct.integrity.points.0}}
- {{people_admin.section_08.8_1_code_of_conduct.integrity.points.1}}
- {{people_admin.section_08.8_1_code_of_conduct.integrity.points.2}}
- {{people_admin.section_08.8_1_code_of_conduct.integrity.points.3}}

{{people_admin.section_08.8_1_code_of_conduct.respect.title}}
- {{people_admin.section_08.8_1_code_of_conduct.respect.points.0}}
- {{people_admin.section_08.8_1_code_of_conduct.respect.points.1}}
- {{people_admin.section_08.8_1_code_of_conduct.respect.points.2}}
- {{people_admin.section_08.8_1_code_of_conduct.respect.points.3}}

{{people_admin.section_08.8_1_code_of_conduct.compliance.title}}
- {{people_admin.section_08.8_1_code_of_conduct.compliance.points.0}}
- {{people_admin.section_08.8_1_code_of_conduct.compliance.points.1}}
- {{people_admin.section_08.8_1_code_of_conduct.compliance.points.2}}
- {{people_admin.section_08.8_1_code_of_conduct.compliance.points.3}}

{{people_admin.section_08.8_1_code_of_conduct.accountability.title}}
- {{people_admin.section_08.8_1_code_of_conduct.accountability.points.0}}
- {{people_admin.section_08.8_1_code_of_conduct.accountability.points.1}}
- {{people_admin.section_08.8_1_code_of_conduct.accountability.points.2}}
- {{people_admin.section_08.8_1_code_of_conduct.accountability.points.3}}

---

## {{people_admin.section_08.8_2_discipline_issues.title}}

### {{people_admin.section_08.8_2_discipline_issues.minor.title}}

{{people_admin.section_08.8_2_discipline_issues.minor.attendance.title}}
- {{people_admin.section_08.8_2_discipline_issues.minor.attendance.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.minor.attendance.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.minor.attendance.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.minor.attendance.points.3}}

{{people_admin.section_08.8_2_discipline_issues.minor.performance.title}}
- {{people_admin.section_08.8_2_discipline_issues.minor.performance.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.minor.performance.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.minor.performance.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.minor.performance.points.3}}

{{people_admin.section_08.8_2_discipline_issues.minor.conduct.title}}
- {{people_admin.section_08.8_2_discipline_issues.minor.conduct.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.minor.conduct.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.minor.conduct.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.minor.conduct.points.3}}

{{people_admin.section_08.8_2_discipline_issues.minor.approach.title}}
- {{people_admin.section_08.8_2_discipline_issues.minor.approach.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.minor.approach.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.minor.approach.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.minor.approach.points.3}}

---

### {{people_admin.section_08.8_2_discipline_issues.moderate.title}}

{{people_admin.section_08.8_2_discipline_issues.moderate.repeated.title}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.repeated.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.repeated.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.repeated.points.2}}

{{people_admin.section_08.8_2_discipline_issues.moderate.single.title}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.3}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.4}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.single.points.5}}

{{people_admin.section_08.8_2_discipline_issues.moderate.approach.title}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.approach.points.0}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.approach.points.1}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.approach.points.2}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.approach.points.3}}
- {{people_admin.section_08.8_2_discipline_issues.moderate.approach.points.4}}

---

### {{people_admin.section_08.8_2_discipline_issues.serious.title}}



# {{people_admin.section_09.title}}

## {{people_admin.section_09.9_1_professional_conduct.title}}
- {{people_admin.section_09.9_1_professional_conduct.points.0}}
- {{people_admin.section_09.9_1_professional_conduct.points.1}}
- {{people_admin.section_09.9_1_professional_conduct.points.2}}

## {{people_admin.section_09.9_2_dress_code.title}}
- {{people_admin.section_09.9_2_dress_code.points.0}}
- {{people_admin.section_09.9_2_dress_code.points.1}}
- {{people_admin.section_09.9_2_dress_code.points.2}}

## {{people_admin.section_09.9_3_technology_use.title}}
- {{people_admin.section_09.9_3_technology_use.points.0}}
- {{people_admin.section_09.9_3_technology_use.points.1}}
- {{people_admin.section_09.9_3_technology_use.points.2}}

## {{people_admin.section_09.9_4_vehicle_policy.title}}
- {{people_admin.section_09.9_4_vehicle_policy.points.0}}
- {{people_admin.section_09.9_4_vehicle_policy.points.1}}
- {{people_admin.section_09.9_4_vehicle_policy.points.2}}
- {{people_admin.section_09.9_4_vehicle_policy.points.3}}

## {{people_admin.section_09.9_5_substance_abuse.title}}
- {{people_admin.section_09.9_5_substance_abuse.points.0}}
- {{people_admin.section_09.9_5_substance_abuse.points.1}}

## {{people_admin.section_09.9_6_confidentiality.title}}
- {{people_admin.section_09.9_6_confidentiality.points.0}}
- {{people_admin.section_09.9_6_confidentiality.points.1}}

---


# {{people_admin.section_10.title}}

## {{people_admin.section_10.10_1_communication.title}}

- {{people_admin.section_10.10_1_communication.intro.0}}
- {{people_admin.section_10.10_1_communication.intro.1}}

### {{people_admin.section_10.10_1_communication.weekly_meetings.title}}
{{people_admin.section_10.10_1_communication.weekly_meetings.details.0}}
{{people_admin.section_10.10_1_communication.weekly_meetings.details.1}}
{{people_admin.section_10.10_1_communication.weekly_meetings.details.2}}
- {{people_admin.section_10.10_1_communication.weekly_meetings.details.3}}
- {{people_admin.section_10.10_1_communication.weekly_meetings.details.4}}
- {{people_admin.section_10.10_1_communication.weekly_meetings.details.5}}
- {{people_admin.section_10.10_1_communication.weekly_meetings.details.6}}

### {{people_admin.section_10.10_1_communication.sales_meetings.title}}
{{people_admin.section_10.10_1_communication.sales_meetings.details.0}}
{{people_admin.section_10.10_1_communication.sales_meetings.details.1}}
{{people_admin.section_10.10_1_communication.sales_meetings.details.2}}
{{people_admin.section_10.10_1_communication.sales_meetings.details.3}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.4}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.5}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.6}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.7}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.8}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.9}}
- {{people_admin.section_10.10_1_communication.sales_meetings.details.10}}

### {{people_admin.section_10.10_1_communication.town_hall.title}}
{{people_admin.section_10.10_1_communication.town_hall.details.0}}
{{people_admin.section_10.10_1_communication.town_hall.details.1}}
{{people_admin.section_10.10_1_communication.town_hall.details.2}}
{{people_admin.section_10.10_1_communication.town_hall.details.3}}
- {{people_admin.section_10.10_1_communication.town_hall.details.4}}
- {{people_admin.section_10.10_1_communication.town_hall.details.5}}
- {{people_admin.section_10.10_1_communication.town_hall.details.6}}
- {{people_admin.section_10.10_1_communication.town_hall.details.7}}
- {{people_admin.section_10.10_1_communication.town_hall.details.8}}
{{people_admin.section_10.10_1_communication.town_hall.details.9}}
- {{people_admin.section_10.10_1_communication.town_hall.details.10}}
- {{people_admin.section_10.10_1_communication.town_hall.details.11}}
- {{people_admin.section_10.10_1_communication.town_hall.details.12}}
- {{people_admin.section_10.10_1_communication.town_hall.details.13}}

### {{people_admin.section_10.10_1_communication.one_on_one.title}}
{{people_admin.section_10.10_1_communication.one_on_one.details.0}}
{{people_admin.section_10.10_1_communication.one_on_one.details.1}}
{{people_admin.section_10.10_1_communication.one_on_one.details.2}}
- {{people_admin.section_10.10_1_communication.one_on_one.details.3}}
- {{people_admin.section_10.10_1_communication.one_on_one.details.4}}
- {{people_admin.section_10.10_1_communication.one_on_one.details.5}}
- {{people_admin.section_10.10_1_communication.one_on_one.details.6}}
- {{people_admin.section_10.10_1_communication.one_on_one.details.7}}
{{people_admin.section_10.10_1_communication.one_on_one.details.8}}

## {{people_admin.section_10.10_2_grievance_procedure.title}}

### {{people_admin.section_10.10_2_grievance_procedure.what_is.title}}
{{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.title}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.1}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.2}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.3}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.4}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.grievance.points.5}}

{{people_admin.section_10.10_2_grievance_procedure.what_is.not_grievance.title}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.not_grievance.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.not_grievance.points.1}}
- {{people_admin.section_10.10_2_grievance_procedure.what_is.not_grievance.points.2}}

### {{people_admin.section_10.10_2_grievance_procedure.informal.title}}
{{people_admin.section_10.10_2_grievance_procedure.informal.intro}}
{{people_admin.section_10.10_2_grievance_procedure.informal.steps.0}}
   - {{people_admin.section_10.10_2_grievance_procedure.informal.steps.1}}
   - {{people_admin.section_10.10_2_grievance_procedure.informal.steps.2}}
   - {{people_admin.section_10.10_2_grievance_procedure.informal.steps.3}}
{{people_admin.section_10.10_2_grievance_procedure.informal.steps.4}}
   - {{people_admin.section_10.10_2_grievance_procedure.informal.steps.5}}
   - {{people_admin.section_10.10_2_grievance_procedure.informal.steps.6}}

{{people_admin.section_10.10_2_grievance_procedure.informal.outcome.0}}
{{people_admin.section_10.10_2_grievance_procedure.informal.outcome.1}}

### {{people_admin.section_10.10_2_grievance_procedure.formal.title}}
{{people_admin.section_10.10_2_grievance_procedure.formal.step_1.title}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_1.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_1.points.1}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_1.points.2}}

{{people_admin.section_10.10_2_grievance_procedure.formal.step_2.title}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_2.points.0}}

{{people_admin.section_10.10_2_grievance_procedure.formal.step_3.title}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_3.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_3.points.1}}

{{people_admin.section_10.10_2_grievance_procedure.formal.step_4.title}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_4.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_4.points.1}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_4.points.2}}

{{people_admin.section_10.10_2_grievance_procedure.formal.step_5.title}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_5.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.formal.step_5.points.1}}

### {{people_admin.section_10.10_2_grievance_procedure.principles.title}}
- {{people_admin.section_10.10_2_grievance_procedure.principles.points.0}}
- {{people_admin.section_10.10_2_grievance_procedure.principles.points.1}}
- {{people_admin.section_10.10_2_grievance_procedure.principles.points.2}}
- {{people_admin.section_10.10_2_grievance_procedure.principles.points.3}}

## {{people_admin.section_10.10_3_harassment.title}}
- {{people_admin.section_10.10_3_harassment.points.0}}
- {{people_admin.section_10.10_3_harassment.points.1}}
- {{people_admin.section_10.10_3_harassment.points.2}}

## {{people_admin.section_10.10_4_suggestions.title}}
- {{people_admin.section_10.10_4_suggestions.points.0}}
- {{people_admin.section_10.10_4_suggestions.points.1}}

## {{people_admin.section_10.10_5_recognition.title}}
{{people_admin.section_10.10_5_recognition.note}}

{{people_admin.section_10.10_5_recognition.formal.title}}
- {{people_admin.section_10.10_5_recognition.formal.points.0}}
- {{people_admin.section_10.10_5_recognition.formal.points.1}}
- {{people_admin.section_10.10_5_recognition.formal.points.2}}
- {{people_admin.section_10.10_5_recognition.formal.points.3}}

{{people_admin.section_10.10_5_recognition.informal.title}}
- {{people_admin.section_10.10_5_recognition.informal.points.0}}

{{people_admin.section_10.10_5_recognition.purpose}}

## {{people_admin.section_10.10_6_events.title}}

### {{people_admin.section_10.10_6_events.annual_company.title}}
{{people_admin.section_10.10_6_events.annual_company.points.0}}
{{people_admin.section_10.10_6_events.annual_company.points.1}}
{{people_admin.section_10.10_6_events.annual_company.points.2}}

### {{people_admin.section_10.10_6_events.team_celebrations.title}}
{{people_admin.section_10.10_6_events.team_celebrations.points.0}}
{{people_admin.section_10.10_6_events.team_celebrations.points.1}}

### {{people_admin.section_10.10_6_events.personal_milestones.title}}
{{people_admin.section_10.10_6_events.personal_milestones.points.0}}
{{people_admin.section_10.10_6_events.personal_milestones.points.1}}

---


# {{people_admin.section_11.title}}

## {{people_admin.section_11.11_1_personnel_file.title}}

### {{people_admin.section_11.11_1_personnel_file.contents.title}}

{{people_admin.section_11.11_1_personnel_file.contents.intro}}

{{people_admin.section_11.11_1_personnel_file.contents.A.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.A.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.A.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.A.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.A.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.A.points.4}}

{{people_admin.section_11.11_1_personnel_file.contents.B.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.B.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.B.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.B.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.B.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.B.points.4}}

{{people_admin.section_11.11_1_personnel_file.contents.C.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.4}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.5}}
- {{people_admin.section_11.11_1_personnel_file.contents.C.points.6}}

{{people_admin.section_11.11_1_personnel_file.contents.D.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.D.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.D.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.D.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.D.points.3}}

{{people_admin.section_11.11_1_personnel_file.contents.E.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.4}}
- {{people_admin.section_11.11_1_personnel_file.contents.E.points.5}}

{{people_admin.section_11.11_1_personnel_file.contents.F.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.F.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.F.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.F.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.F.points.3}}

{{people_admin.section_11.11_1_personnel_file.contents.G.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.G.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.G.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.G.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.G.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.G.points.4}}

{{people_admin.section_11.11_1_personnel_file.contents.H.title}}
- {{people_admin.section_11.11_1_personnel_file.contents.H.points.0}}
- {{people_admin.section_11.11_1_personnel_file.contents.H.points.1}}
- {{people_admin.section_11.11_1_personnel_file.contents.H.points.2}}
- {{people_admin.section_11.11_1_personnel_file.contents.H.points.3}}
- {{people_admin.section_11.11_1_personnel_file.contents.H.points.4}}

---

### {{people_admin.section_11.11_1_personnel_file.organization.title}}

{{people_admin.section_11.11_1_personnel_file.organization.physical.title}}
- {{people_admin.section_11.11_1_personnel_file.organization.physical.points.0}}
- {{people_admin.section_11.11_1_personnel_file.organization.physical.points.1}}
- {{people_admin.section_11.11_1_personnel_file.organization.physical.points.2}}

{{people_admin.section_11.11_1_personnel_file.organization.physical.active_vs_inactive.title}}
  * {{people_admin.section_11.11_1_personnel_file.organization.physical.active_vs_inactive.points.0}}
  * {{people_admin.section_11.11_1_personnel_file.organization.physical.active_vs_inactive.points.1}}

{{people_admin.section_11.11_1_personnel_file.organization.digital.title}}
- {{people_admin.section_11.11_1_personnel_file.organization.digital.points.0}}
- {{people_admin.section_11.11_1_personnel_file.organization.digital.points.1}}
- {{people_admin.section_11.11_1_personnel_file.organization.digital.points.2}}

---

### {{people_admin.section_11.11_1_personnel_file.confidentiality.title}}

{{people_admin.section_11.11_1_personnel_file.confidentiality.files.title}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.files.points.0}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.files.points.1}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.files.points.2}}

{{people_admin.section_11.11_1_personnel_file.confidentiality.sensitive.title}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.sensitive.points.0}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.sensitive.points.1}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.sensitive.points.2}}

{{people_admin.section_11.11_1_personnel_file.confidentiality.data_protection.title}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.data_protection.points.0}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.data_protection.points.1}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.data_protection.points.2}}
- {{people_admin.section_11.11_1_personnel_file.confidentiality.data_protection.points.3}}

---

### {{people_admin.section_11.11_1_personnel_file.retention.title}}

{{people_admin.section_11.11_1_personnel_file.retention.active.title}}
- {{people_admin.section_11.11_1_personnel_file.retention.active.points.0}}

{{people_admin.section_11.11_1_personnel_file.retention.separated.title}}
- {{people_admin.section_11.11_1_personnel_file.retention.separated.points.0}}
- {{people_admin.section_11.11_1_personnel_file.retention.separated.points.1}}
  * {{people_admin.section_11.11_1_personnel_file.retention.separated.points.2}}
  * {{people_admin.section_11.11_1_personnel_file.retention.separated.points.3}}

{{people_admin.section_11.11_1_personnel_file.retention.why.title}}
- {{people_admin.section_11.11_1_personnel_file.retention.why.points.0}}
- {{people_admin.section_11.11_1_personnel_file.retention.why.points.1}}
- {{people_admin.section_11.11_1_personnel_file.retention.why.points.2}}

---

## {{people_admin.section_11.11_2_payroll.title}}

### {{people_admin.section_11.11_2_payroll.cycle.title}}

{{people_admin.section_11.11_2_payroll.cycle.note}}

{{people_admin.section_11.11_2_payroll.cycle.process.title}}
- {{people_admin.section_11.11_2_payroll.cycle.process.points.0}}
- {{people_admin.section_11.11_2_payroll.cycle.process.points.1}}
- {{people_admin.section_11.11_2_payroll.cycle.process.points.2}}
- {{people_admin.section_11.11_2_payroll.cycle.process.points.3}}

---

### {{people_admin.section_11.11_2_payroll.inputs.title}}

{{people_admin.section_11.11_2_payroll.inputs.collects.title}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.0}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.1}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.2}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.3}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.4}}
- {{people_admin.section_11.11_2_payroll.inputs.collects.points.5}}

---

### {{people_admin.section_11.11_2_payroll.calculations.title}}

{{people_admin.section_11.11_2_payroll.calculations.gross.title}}
- {{people_admin.section_11.11_2_payroll.calculations.gross.points.0}}
- {{people_admin.section_11.11_2_payroll.calculations.gross.points.1}}
- {{people_admin.section_11.11_2_payroll.calculations.gross.points.2}}
- {{people_admin.section_11.11_2_payroll.calculations.gross.points.3}}
- {{people_admin.section_11.11_2_payroll.calculations.gross.points.4}}

{{people_admin.section_11.11_2_payroll.calculations.deductions.title}}
- {{people_admin.section_11.11_2_payroll.calculations.deductions.points.0}}
- {{people_admin.section_11.11_2_payroll.calculations.deductions.points.1}}
- {{people_admin.section_11.11_2_payroll.calculations.deductions.points.2}}
- {{people_admin.section_11.11_2_payroll.calculations.deductions.points.3}}

{{people_admin.section_11.11_2_payroll.calculations.net}}

---

### {{people_admin.section_11.11_2_payroll.records.title}}

{{people_admin.section_11.11_2_payroll.records.maintained.title}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.0}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.1}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.2}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.3}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.4}}
- {{people_admin.section_11.11_2_payroll.records.maintained.points.5}}

{{people_admin.section_11.11_2_payroll.records.retention}}

---

## {{people_admin.section_11.11_3_cnss_tax.title}}

### {{people_admin.section_11.11_3_cnss_tax.cnss.title}}

{{people_admin.section_11.11_3_cnss_tax.cnss.obligations}}

{{people_admin.section_11.11_3_cnss_tax.cnss.declaration.title}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.1}}
  * {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.2}}
  * {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.3}}
  * {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.4}}
  * {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.5}}
  * {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.6}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.7}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.declaration.points.8}}

{{people_admin.section_11.11_3_cnss_tax.cnss.payment.title}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.payment.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.payment.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.payment.points.2}}

{{people_admin.section_11.11_3_cnss_tax.cnss.registration.title}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.registration.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.registration.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.registration.points.2}}

{{people_admin.section_11.11_3_cnss_tax.cnss.injury.title}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.injury.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.injury.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.cnss.injury.points.2}}

---

### {{people_admin.section_11.11_3_cnss_tax.irpp.title}}

{{people_admin.section_11.11_3_cnss_tax.irpp.obligations}}

{{people_admin.section_11.11_3_cnss_tax.irpp.withholding.title}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.withholding.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.withholding.points.1}}

{{people_admin.section_11.11_3_cnss_tax.irpp.declaration.title}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.declaration.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.declaration.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.declaration.points.2}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.declaration.points.3}}

{{people_admin.section_11.11_3_cnss_tax.irpp.certificates.title}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.certificates.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.certificates.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.certificates.points.2}}
- {{people_admin.section_11.11_3_cnss_tax.irpp.certificates.points.3}}

---

### {{people_admin.section_11.11_3_cnss_tax.record_keeping.title}}

{{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.title}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.points.2}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.points.3}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.maintain.points.4}}

{{people_admin.section_11.11_3_cnss_tax.record_keeping.retention}}

{{people_admin.section_11.11_3_cnss_tax.record_keeping.audits.title}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.audits.points.0}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.audits.points.1}}
- {{people_admin.section_11.11_3_cnss_tax.record_keeping.audits.points.2}}

---

## {{people_admin.section_11.11_4_labor_inspectorate.title}}

### {{people_admin.section_11.11_4_labor_inspectorate.role.title}}

{{people_admin.section_11.11_4_labor_inspectorate.role.desc}}

{{people_admin.section_11.11_4_labor_inspectorate.obligations.title}}

{{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.0}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.1}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.2}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.3}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.4}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.5}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.6}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.documents.points.7}}

{{people_admin.section_11.11_4_labor_inspectorate.obligations.notices.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.notices.points.0}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.notices.points.1}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.notices.points.2}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.notices.points.3}}

{{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.0}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.1}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.2}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.3}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.4}}
- {{people_admin.section_11.11_4_labor_inspectorate.obligations.comply.points.5}}

---

### {{people_admin.section_11.11_4_labor_inspectorate.visits.title}}

{{people_admin.section_11.11_4_labor_inspectorate.visits.types.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.types.points.0}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.types.points.1}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.types.points.2}}

{{people_admin.section_11.11_4_labor_inspectorate.visits.during.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.during.desc}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.during.ss_plus.title}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.ss_plus.points.0}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.ss_plus.points.1}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.ss_plus.points.2}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.ss_plus.points.3}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.during.inspector.title}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.inspector.points.0}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.inspector.points.1}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.inspector.points.2}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.during.inspector.points.3}}

{{people_admin.section_11.11_4_labor_inspectorate.visits.after.title}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.after.violations.title}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.violations.points.0}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.violations.points.1}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.violations.points.2}}
- {{people_admin.section_11.11_4_labor_inspectorate.visits.after.response.title}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.response.points.0}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.response.points.1}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.response.points.2}}
  * {{people_admin.section_11.11_4_labor_inspectorate.visits.after.response.points.3}}

---

## {{people_admin.section_11.11_5_internal_regulations.title}}

### {{people_admin.section_11.11_5_internal_regulations.what_is.title}}

{{people_admin.section_11.11_5_internal_regulations.what_is.definition}}

{{people_admin.section_11.11_5_internal_regulations.what_is.purpose.title}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.purpose.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.purpose.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.purpose.points.2}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.purpose.points.3}}

{{people_admin.section_11.11_5_internal_regulations.what_is.legal.title}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.legal.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.legal.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.what_is.legal.points.2}}

---

### {{people_admin.section_11.11_5_internal_regulations.contents.title}}

{{people_admin.section_11.11_5_internal_regulations.contents.required}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.0.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.0.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.0.details.1}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.1.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.1.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.1.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.1.details.2}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.1.details.3}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.2.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.2.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.2.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.2.details.2}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.2.details.3}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.3.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.3.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.3.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.3.details.2}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.3.details.3}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.4.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.4.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.4.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.4.details.2}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.4.details.3}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.5.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.5.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.5.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.5.details.2}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.5.details.3}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.6.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.6.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.6.details.1}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.7.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.7.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.7.details.1}}

{{people_admin.section_11.11_5_internal_regulations.contents.points.8.title}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.8.details.0}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.8.details.1}}
- {{people_admin.section_11.11_5_internal_regulations.contents.points.8.details.2}}

---

### {{people_admin.section_11.11_5_internal_regulations.process.title}}

{{people_admin.section_11.11_5_internal_regulations.process.step_1.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_1.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_1.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_1.points.2}}

{{people_admin.section_11.11_5_internal_regulations.process.step_2.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_2.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_2.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_2.points.2}}

{{people_admin.section_11.11_5_internal_regulations.process.step_3.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_3.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_3.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_3.points.2}}

{{people_admin.section_11.11_5_internal_regulations.process.step_4.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_4.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_4.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_4.points.2}}

{{people_admin.section_11.11_5_internal_regulations.process.step_5.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_5.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_5.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_5.points.2}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_5.points.3}}

{{people_admin.section_11.11_5_internal_regulations.process.step_6.title}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_6.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.process.step_6.points.1}}

---

### {{people_admin.section_11.11_5_internal_regulations.status.title}}

{{people_admin.section_11.11_5_internal_regulations.status.action.title}}
- {{people_admin.section_11.11_5_internal_regulations.status.action.points.0}}
- {{people_admin.section_11.11_5_internal_regulations.status.action.points.1}}
- {{people_admin.section_11.11_5_internal_regulations.status.action.points.2}}

{{people_admin.section_11.11_5_internal_regulations.status.responsible}}

---


# {{people_admin.section_12.title}}

## {{people_admin.section_12.12_1_safety_program.title}}

### {{people_admin.section_12.12_1_safety_program.philosophy.title}}

{{people_admin.section_12.12_1_safety_program.philosophy.commitment.title}}
- {{people_admin.section_12.12_1_safety_program.philosophy.commitment.points.0}}
- {{people_admin.section_12.12_1_safety_program.philosophy.commitment.points.1}}
- {{people_admin.section_12.12_1_safety_program.philosophy.commitment.points.2}}
- {{people_admin.section_12.12_1_safety_program.philosophy.commitment.points.3}}

{{people_admin.section_12.12_1_safety_program.philosophy.priority.title}}
- {{people_admin.section_12.12_1_safety_program.philosophy.priority.points.0}}
- {{people_admin.section_12.12_1_safety_program.philosophy.priority.points.1}}
- {{people_admin.section_12.12_1_safety_program.philosophy.priority.points.2}}
- {{people_admin.section_12.12_1_safety_program.philosophy.priority.points.3}}

---

### {{people_admin.section_12.12_1_safety_program.responsibilities.title}}

{{people_admin.section_12.12_1_safety_program.responsibilities.management.title}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.management.points.0}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.management.points.1}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.management.points.2}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.management.points.3}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.management.points.4}}

{{people_admin.section_12.12_1_safety_program.responsibilities.operations.title}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.operations.points.0}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.operations.points.1}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.operations.points.2}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.operations.points.3}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.operations.points.4}}

{{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.title}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.points.0}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.points.1}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.points.2}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.points.3}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.team_leaders.points.4}}

{{people_admin.section_12.12_1_safety_program.responsibilities.employees.title}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.employees.points.0}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.employees.points.1}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.employees.points.2}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.employees.points.3}}
- {{people_admin.section_12.12_1_safety_program.responsibilities.employees.points.4}}

---

### {{people_admin.section_12.12_1_safety_program.rules.title}}

{{people_admin.section_12.12_1_safety_program.rules.general.title}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.3}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.4}}
- {{people_admin.section_12.12_1_safety_program.rules.general.points.5}}

{{people_admin.section_12.12_1_safety_program.rules.chemical.title}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.3}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.4}}
- {{people_admin.section_12.12_1_safety_program.rules.chemical.points.5}}

{{people_admin.section_12.12_1_safety_program.rules.height.title}}
- {{people_admin.section_12.12_1_safety_program.rules.height.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.height.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.height.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.height.points.3}}
- {{people_admin.section_12.12_1_safety_program.rules.height.points.4}}

{{people_admin.section_12.12_1_safety_program.rules.vehicle.title}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.3}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.4}}
- {{people_admin.section_12.12_1_safety_program.rules.vehicle.points.5}}

{{people_admin.section_12.12_1_safety_program.rules.customer_site.title}}
- {{people_admin.section_12.12_1_safety_program.rules.customer_site.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.customer_site.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.customer_site.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.customer_site.points.3}}
- {{people_admin.section_12.12_1_safety_program.rules.customer_site.points.4}}

{{people_admin.section_12.12_1_safety_program.rules.lifting.title}}
- {{people_admin.section_12.12_1_safety_program.rules.lifting.points.0}}
- {{people_admin.section_12.12_1_safety_program.rules.lifting.points.1}}
- {{people_admin.section_12.12_1_safety_program.rules.lifting.points.2}}
- {{people_admin.section_12.12_1_safety_program.rules.lifting.points.3}}

---

### {{people_admin.section_12.12_1_safety_program.ppe.title}}

{{people_admin.section_12.12_1_safety_program.ppe.minimum.title}}
- {{people_admin.section_12.12_1_safety_program.ppe.minimum.points.0}}
- {{people_admin.section_12.12_1_safety_program.ppe.minimum.points.1}}
- {{people_admin.section_12.12_1_safety_program.ppe.minimum.points.2}}

{{people_admin.section_12.12_1_safety_program.ppe.additional.title}}
- {{people_admin.section_12.12_1_safety_program.ppe.additional.points.0}}
- {{people_admin.section_12.12_1_safety_program.ppe.additional.points.1}}
- {{people_admin.section_12.12_1_safety_program.ppe.additional.points.2}}
- {{people_admin.section_12.12_1_safety_program.ppe.additional.points.3}}
- {{people_admin.section_12.12_1_safety_program.ppe.additional.points.4}}

{{people_admin.section_12.12_1_safety_program.ppe.provision.title}}
- {{people_admin.section_12.12_1_safety_program.ppe.provision.points.0}}
- {{people_admin.section_12.12_1_safety_program.ppe.provision.points.1}}
- {{people_admin.section_12.12_1_safety_program.ppe.provision.points.2}}

---

### {{people_admin.section_12.12_1_safety_program.training.title}}

{{people_admin.section_12.12_1_safety_program.training.points.0}}
- {{people_admin.section_12.12_1_safety_program.training.points.1}}
- {{people_admin.section_12.12_1_safety_program.training.points.2}}
- {{people_admin.section_12.12_1_safety_program.training.points.3}}
- {{people_admin.section_12.12_1_safety_program.training.points.4}}

---

### {{people_admin.section_12.12_1_safety_program.inspections.title}}

{{people_admin.section_12.12_1_safety_program.inspections.monthly.title}}
- {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.0}}
- {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.1}}
- {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.2}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.3}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.4}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.5}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.6}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.7}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.8}}
  * {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.9}}
- {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.10}}
- {{people_admin.section_12.12_1_safety_program.inspections.monthly.points.11}}

{{people_admin.section_12.12_1_safety_program.inspections.vehicle.title}}
- {{people_admin.section_12.12_1_safety_program.inspections.vehicle.points.0}}
- {{people_admin.section_12.12_1_safety_program.inspections.vehicle.points.1}}
- {{people_admin.section_12.12_1_safety_program.inspections.vehicle.points.2}}

---

## {{people_admin.section_12.12_2_incident_reporting.title}}

### {{people_admin.section_12.12_2_incident_reporting.what_is.title}}

{{people_admin.section_12.12_2_incident_reporting.what_is.must_report.title}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.2}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.3}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.4}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.must_report.points.5}}

{{people_admin.section_12.12_2_incident_reporting.what_is.even_minor.title}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.even_minor.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.even_minor.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.what_is.even_minor.points.2}}

---

### {{people_admin.section_12.12_2_incident_reporting.actions.title}}

{{people_admin.section_12.12_2_incident_reporting.actions.if_injury}}

{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.title}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.steps.0}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.steps.1}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.steps.2}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.steps.3}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_1.steps.4}}

{{people_admin.section_12.12_2_incident_reporting.actions.priority_2.title}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_2.steps.0}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_2.steps.1}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_2.steps.2}}

{{people_admin.section_12.12_2_incident_reporting.actions.priority_3.title}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_3.steps.0}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_3.steps.1}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_3.steps.2}}
{{people_admin.section_12.12_2_incident_reporting.actions.priority_3.steps.3}}

---

### {{people_admin.section_12.12_2_incident_reporting.procedure.title}}

{{people_admin.section_12.12_2_incident_reporting.procedure.step_1.title}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_1.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_1.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_1.points.2}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_1.points.3}}

{{people_admin.section_12.12_2_incident_reporting.procedure.step_2.title}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.1}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.2}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.3}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.4}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.5}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.6}}
  * {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.7}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_2.points.8}}

{{people_admin.section_12.12_2_incident_reporting.procedure.step_3.title}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_3.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_3.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.procedure.step_3.points.2}}

---

### {{people_admin.section_12.12_2_incident_reporting.investigation.title}}

{{people_admin.section_12.12_2_incident_reporting.investigation.purpose}}

{{people_admin.section_12.12_2_incident_reporting.investigation.who.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.who.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.who.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.who.points.2}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.who.points.3}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.title}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.points.2}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.points.3}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_1.points.4}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.2}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.3}}
  * {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.4}}
  * {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.5}}
  * {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.6}}
  * {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.7}}
  * {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_2.points.8}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.1}}
  1. {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.2}}
  2. {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.3}}
  3. {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.4}}
  4. {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.5}}
  5. {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.6}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_3.points.7}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_4.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_4.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_4.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_4.points.2}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_5.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_5.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_5.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_5.points.2}}

{{people_admin.section_12.12_2_incident_reporting.investigation.process.step_6.title}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_6.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_6.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.investigation.process.step_6.points.2}}

---

### {{people_admin.section_12.12_2_incident_reporting.culture.title}}

{{people_admin.section_12.12_2_incident_reporting.culture.encourage.title}}
- {{people_admin.section_12.12_2_incident_reporting.culture.encourage.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.culture.encourage.points.1}}
- {{people_admin.section_12.12_2_incident_reporting.culture.encourage.points.2}}

{{people_admin.section_12.12_2_incident_reporting.culture.protection.title}}
- {{people_admin.section_12.12_2_incident_reporting.culture.protection.points.0}}
- {{people_admin.section_12.12_2_incident_reporting.culture.protection.points.1}}

---

## {{people_admin.section_12.12_3_work_injuries.title}}

### {{people_admin.section_12.12_3_work_injuries.coverage.title}}

{{people_admin.section_12.12_3_work_injuries.coverage.covered.title}}
- {{people_admin.section_12.12_3_work_injuries.coverage.covered.points.0}}
- {{people_admin.section_12.12_3_work_injuries.coverage.covered.points.1}}
- {{people_admin.section_12.12_3_work_injuries.coverage.covered.points.2}}
- {{people_admin.section_12.12_3_work_injuries.coverage.covered.points.3}}

{{people_admin.section_12.12_3_work_injuries.coverage.employer.title}}
- {{people_admin.section_12.12_3_work_injuries.coverage.employer.points.0}}
- {{people_admin.section_12.12_3_work_injuries.coverage.employer.points.1}}
- {{people_admin.section_12.12_3_work_injuries.coverage.employer.points.2}}
- {{people_admin.section_12.12_3_work_injuries.coverage.employer.points.3}}

---

### {{people_admin.section_12.12_3_work_injuries.process.title}}

{{people_admin.section_12.12_3_work_injuries.process.step_1.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_1.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_1.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_1.points.2}}

{{people_admin.section_12.12_3_work_injuries.process.step_2.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_2.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_2.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_2.points.2}}

{{people_admin.section_12.12_3_work_injuries.process.step_3.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_3.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_3.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_3.points.2}}
- {{people_admin.section_12.12_3_work_injuries.process.step_3.points.3}}

{{people_admin.section_12.12_3_work_injuries.process.step_4.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_4.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_4.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_4.points.2}}
- {{people_admin.section_12.12_3_work_injuries.process.step_4.points.3}}
- {{people_admin.section_12.12_3_work_injuries.process.step_4.points.4}}

{{people_admin.section_12.12_3_work_injuries.process.step_5.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_5.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_5.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_5.points.2}}
- {{people_admin.section_12.12_3_work_injuries.process.step_5.points.3}}

{{people_admin.section_12.12_3_work_injuries.process.step_6.title}}
- {{people_admin.section_12.12_3_work_injuries.process.step_6.points.0}}
- {{people_admin.section_12.12_3_work_injuries.process.step_6.points.1}}
- {{people_admin.section_12.12_3_work_injuries.process.step_6.points.2}}

---

### {{people_admin.section_12.12_3_work_injuries.preventing.title}}

{{people_admin.section_12.12_3_work_injuries.preventing.measures.title}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.0}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.1}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.2}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.3}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.4}}
- {{people_admin.section_12.12_3_work_injuries.preventing.measures.points.5}}

{{people_admin.section_12.12_3_work_injuries.preventing.goal}}

---

## {{people_admin.section_12.12_4_wellness.title}}

### {{people_admin.section_12.12_4_wellness.employee_wellness.title}}

{{people_admin.section_12.12_4_wellness.employee_wellness.values.title}}
- {{people_admin.section_12.12_4_wellness.employee_wellness.values.points.0}}
- {{people_admin.section_12.12_4_wellness.employee_wellness.values.points.1}}
- {{people_admin.section_12.12_4_wellness.employee_wellness.values.points.2}}

---

### {{people_admin.section_12.12_4_wellness.current_initiatives.title}}

{{people_admin.section_12.12_4_wellness.current_initiatives.leave.title}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.leave.points.0}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.leave.points.1}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.leave.points.2}}

{{people_admin.section_12.12_4_wellness.current_initiatives.hours.title}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.hours.points.0}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.hours.points.1}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.hours.points.2}}

{{people_admin.section_12.12_4_wellness.current_initiatives.environment.title}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.environment.points.0}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.environment.points.1}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.environment.points.2}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.environment.points.3}}

{{people_admin.section_12.12_4_wellness.current_initiatives.ramadan.title}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.ramadan.points.0}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.ramadan.points.1}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.ramadan.points.2}}

{{people_admin.section_12.12_4_wellness.current_initiatives.mental_health.title}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.mental_health.points.0}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.mental_health.points.1}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.mental_health.points.2}}
- {{people_admin.section_12.12_4_wellness.current_initiatives.mental_health.points.3}}

---

### {{people_admin.section_12.12_4_wellness.future_initiatives.title}}

{{people_admin.section_12.12_4_wellness.future_initiatives.insurance.title}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.insurance.points.0}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.insurance.points.1}}

{{people_admin.section_12.12_4_wellness.future_initiatives.programs.title}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.programs.points.0}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.programs.points.1}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.programs.points.2}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.programs.points.3}}

{{people_admin.section_12.12_4_wellness.future_initiatives.eap.title}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.eap.points.0}}
- {{people_admin.section_12.12_4_wellness.future_initiatives.eap.points.1}}

{{people_admin.section_12.12_4_wellness.future_initiatives.implementation}}

---

### {{people_admin.section_12.12_4_wellness.support.title}}

{{people_admin.section_12.12_4_wellness.support.struggling.title}}
- {{people_admin.section_12.12_4_wellness.support.struggling.points.0}}
- {{people_admin.section_12.12_4_wellness.support.struggling.points.1}}
- {{people_admin.section_12.12_4_wellness.support.struggling.points.2}}
- {{people_admin.section_12.12_4_wellness.support.struggling.points.3}}
- {{people_admin.section_12.12_4_wellness.support.struggling.points.4}}

{{people_admin.section_12.12_4_wellness.support.substance.title}}
- {{people_admin.section_12.12_4_wellness.support.substance.points.0}}
- {{people_admin.section_12.12_4_wellness.support.substance.points.1}}
- {{people_admin.section_12.12_4_wellness.support.substance.points.2}}
- {{people_admin.section_12.12_4_wellness.support.substance.points.3}}

---


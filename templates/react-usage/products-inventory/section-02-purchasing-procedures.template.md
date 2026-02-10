
# {{products_inventory.section_02.title}}

## {{products_inventory.section_02.purchase_requisition.title}}

### **{{products_inventory.section_02.purchase_requisition.when_required.subtitle}}**

#### **{{products_inventory.section_02.purchase_requisition.when_required.mandatory.title}}**

{{#each products_inventory.section_02.purchase_requisition.when_required.mandatory.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.when_required.not_required.title}}**

{{#each products_inventory.section_02.purchase_requisition.when_required.not_required.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.purchase_requisition.initiation_authority.subtitle}}**

#### **{{products_inventory.section_02.purchase_requisition.initiation_authority.heading}}**

| {{products_inventory.section_02.purchase_requisition.initiation_authority.table.col_position}} | {{products_inventory.section_02.purchase_requisition.initiation_authority.table.col_limit}} | {{products_inventory.section_02.purchase_requisition.initiation_authority.table.col_examples}} |
| :---: | :---: | ----- |
{{#each products_inventory.section_02.purchase_requisition.initiation_authority.table.rows}}
| **{{this.position}}** | {{this.limit}} | {{this.examples}} |
{{/each}}

**{{products_inventory.section_02.purchase_requisition.initiation_authority.any_employee_note}}**

### **{{products_inventory.section_02.purchase_requisition.process.subtitle}}**

**{{products_inventory.section_02.purchase_requisition.process.step_1.title}}**

**{{products_inventory.section_02.purchase_requisition.process.step_1.before_creating}}**

1. **{{products_inventory.section_02.purchase_requisition.process.step_1.verify_stock.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_1.verify_stock.items}}
   * {{this}}  
{{/each}}

2. **{{products_inventory.section_02.purchase_requisition.process.step_1.confirm_need.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_1.confirm_need.items}}
   * {{this}}  
{{/each}}

3. **{{products_inventory.section_02.purchase_requisition.process.step_1.check_existing.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_1.check_existing.items}}
   * {{this}}  
{{/each}}

**{{products_inventory.section_02.purchase_requisition.process.step_2.title}}**

**{{products_inventory.section_02.purchase_requisition.process.step_2.required_info}}**

* **{{products_inventory.section_02.purchase_requisition.process.step_2.requestor_details.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_2.requestor_details.items}}
  * {{this}}  
{{/each}}

* #### **{{products_inventory.section_02.purchase_requisition.process.step_2.item_details.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_2.item_details.items}}
  * {{this}}  
{{/each}}

* #### **{{products_inventory.section_02.purchase_requisition.process.step_2.justification.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_2.justification.items}}
  * {{this}}  
{{/each}}

* #### **{{products_inventory.section_02.purchase_requisition.process.step_2.supplier_preference.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_2.supplier_preference.items}}
  * {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_3.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_3.methods}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_3.deadlines.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_3.deadlines.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_4.title}}**

**{{products_inventory.section_02.purchase_requisition.process.step_4.workflow_intro}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_4.levels}}
1. {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_4.criteria.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_4.criteria.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_4.if_rejected.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_4.if_rejected.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.process.step_5.title}}**

{{#each products_inventory.section_02.purchase_requisition.process.step_5.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.purchase_requisition.special_types.subtitle}}**

#### **{{products_inventory.section_02.purchase_requisition.special_types.emergency.title}}**

{{products_inventory.section_02.purchase_requisition.special_types.emergency.definition}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.emergency.process_title}}**

{{#each products_inventory.section_02.purchase_requisition.special_types.emergency.process}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.emergency.examples_title}}**

{{#each products_inventory.section_02.purchase_requisition.special_types.emergency.examples}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.customer_specific.title}}**

{{products_inventory.section_02.purchase_requisition.special_types.customer_specific.definition}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.customer_specific.process_title}}**

{{#each products_inventory.section_02.purchase_requisition.special_types.customer_specific.process}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.stock_replenishment.title}}**

{{products_inventory.section_02.purchase_requisition.special_types.stock_replenishment.definition}}

#### **{{products_inventory.section_02.purchase_requisition.special_types.stock_replenishment.process_title}}**

{{#each products_inventory.section_02.purchase_requisition.special_types.stock_replenishment.process}}
* {{this}}  
{{/each}}

## {{products_inventory.section_02.approval_workflow.title}}

### **{{products_inventory.section_02.approval_workflow.authority_matrix.subtitle}}**

> [!CAUTION]
> {{products_inventory.section_02.approval_workflow.authority_matrix.caution}}

| {{products_inventory.section_02.approval_workflow.authority_matrix.table.col_value}} | {{products_inventory.section_02.approval_workflow.authority_matrix.table.col_primary}} | {{products_inventory.section_02.approval_workflow.authority_matrix.table.col_secondary}} | {{products_inventory.section_02.approval_workflow.authority_matrix.table.col_notes}} |
| :---- | :---- | :---- | ----- |
{{#each products_inventory.section_02.approval_workflow.authority_matrix.table.rows}}
| **{{this.value}}** | {{this.primary}} | {{this.secondary}} | {{this.notes}} |
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.authority_matrix.payment_control.title}}**
* {{products_inventory.section_02.approval_workflow.authority_matrix.payment_control.single}}
* {{products_inventory.section_02.approval_workflow.authority_matrix.payment_control.dual}}

#### **{{products_inventory.section_02.approval_workflow.authority_matrix.special_cases.title}}**

{{#each products_inventory.section_02.approval_workflow.authority_matrix.special_cases.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.approval_workflow.process_flow.subtitle}}**

#### **{{products_inventory.section_02.approval_workflow.process_flow.standard.title}}**

{{#each products_inventory.section_02.approval_workflow.process_flow.standard.steps}}
{{this}}
↓
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.process_flow.high_value.title}}**

{{#each products_inventory.section_02.approval_workflow.process_flow.high_value.steps}}
{{this}}
↓
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.process_flow.emergency.title}}**

{{#each products_inventory.section_02.approval_workflow.process_flow.emergency.steps}}
{{this}}
↓
{{/each}}

### **{{products_inventory.section_02.approval_workflow.criteria_by_level.subtitle}}**

**{{products_inventory.section_02.approval_workflow.criteria_by_level.team_leader.title}}**
**{{products_inventory.section_02.approval_workflow.criteria_by_level.team_leader.focus}}**

{{#each products_inventory.section_02.approval_workflow.criteria_by_level.team_leader.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.criteria_by_level.operations.title}}**

**{{products_inventory.section_02.approval_workflow.criteria_by_level.operations.focus}}**

{{#each products_inventory.section_02.approval_workflow.criteria_by_level.operations.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.criteria_by_level.purchase.title}}**

**{{products_inventory.section_02.approval_workflow.criteria_by_level.purchase.focus}}**

{{#each products_inventory.section_02.approval_workflow.criteria_by_level.purchase.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.criteria_by_level.manager.title}}**

**{{products_inventory.section_02.approval_workflow.criteria_by_level.manager.focus}}**

{{#each products_inventory.section_02.approval_workflow.criteria_by_level.manager.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.approval_workflow.delegation.subtitle}}**

#### **{{products_inventory.section_02.approval_workflow.delegation.when_unavailable.title}}**

{{#each products_inventory.section_02.approval_workflow.delegation.when_unavailable.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.delegation.rules.title}}**

{{#each products_inventory.section_02.approval_workflow.delegation.rules.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.approval_workflow.delegation.example.title}}**

*{{products_inventory.section_02.approval_workflow.delegation.example.text}}*

## {{products_inventory.section_02.supplier_selection.title}}

### **{{products_inventory.section_02.supplier_selection.criteria.subtitle}}**

#### **{{products_inventory.section_02.supplier_selection.criteria.primary.title}}**

{{#each products_inventory.section_02.supplier_selection.criteria.primary.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.criteria.evaluation.title}}**

**{{products_inventory.section_02.supplier_selection.criteria.evaluation.quality.title}}**

{{#each products_inventory.section_02.supplier_selection.criteria.evaluation.quality.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.criteria.evaluation.price.title}}**

{{#each products_inventory.section_02.supplier_selection.criteria.evaluation.price.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.criteria.evaluation.service.title}}**

{{#each products_inventory.section_02.supplier_selection.criteria.evaluation.service.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.criteria.evaluation.relationship.title}}**

{{#each products_inventory.section_02.supplier_selection.criteria.evaluation.relationship.items}}
* {{this}}  
{{/each}}

{{products_inventory.section_02.supplier_selection.criteria.evaluation.min_score}}

**{{products_inventory.section_02.supplier_selection.po_creation.subtitle}}**

**{{products_inventory.section_02.supplier_selection.po_creation.step_1.title}}**

1. #### **{{products_inventory.section_02.supplier_selection.po_creation.step_1.single_source.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_1.single_source.items}}
   * {{this}}  
{{/each}}

2. #### **{{products_inventory.section_02.supplier_selection.po_creation.step_1.multiple_quotes.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_1.multiple_quotes.items}}
   * {{this}}  
{{/each}}

**{{products_inventory.section_02.supplier_selection.po_creation.step_2.title}}**

**{{products_inventory.section_02.supplier_selection.po_creation.step_2.po_header.subtitle}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_2.po_header.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_creation.step_2.line_items.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_2.line_items.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_creation.step_2.terms.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_2.terms.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_creation.step_3.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_3.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_creation.step_4.title}}**

{{#each products_inventory.section_02.supplier_selection.po_creation.step_4.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.special_order_types.subtitle}}**

**{{products_inventory.section_02.supplier_selection.special_order_types.blanket.title}}**

{{#each products_inventory.section_02.supplier_selection.special_order_types.blanket.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.special_order_types.emergency_po.title}}**

{{#each products_inventory.section_02.supplier_selection.special_order_types.emergency_po.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.special_order_types.import_po.title}}**

{{#each products_inventory.section_02.supplier_selection.special_order_types.import_po.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.supplier_selection.po_management.subtitle}}**

#### **{{products_inventory.section_02.supplier_selection.po_management.tracking.title}}**

{{#each products_inventory.section_02.supplier_selection.po_management.tracking.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_management.tracking.wave_plus.title}}**

{{#each products_inventory.section_02.supplier_selection.po_management.tracking.wave_plus.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_management.changes.title}}**

{{#each products_inventory.section_02.supplier_selection.po_management.changes.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.supplier_selection.po_management.cancellation.title}}**

{{#each products_inventory.section_02.supplier_selection.po_management.cancellation.items}}
* {{this}}  
{{/each}}

## {{products_inventory.section_02.emergency_purchasing.title}}

### **{{products_inventory.section_02.emergency_purchasing.definition.subtitle}}**

#### **{{products_inventory.section_02.emergency_purchasing.definition.qualifying.title}}**

{{#each products_inventory.section_02.emergency_purchasing.definition.qualifying.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.definition.not_emergency.title}}**

{{#each products_inventory.section_02.emergency_purchasing.definition.not_emergency.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.emergency_purchasing.authority.subtitle}}**

#### **{{products_inventory.section_02.emergency_purchasing.authority.immediate.title}}**

{{#each products_inventory.section_02.emergency_purchasing.authority.immediate.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.authority.after_hours.title}}**

{{#each products_inventory.section_02.emergency_purchasing.authority.after_hours.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.emergency_purchasing.process.subtitle}}**

#### **{{products_inventory.section_02.emergency_purchasing.process.step_1.title}}**

* **{{products_inventory.section_02.emergency_purchasing.process.step_1.intro}}**  
{{#each products_inventory.section_02.emergency_purchasing.process.step_1.items}}
  * {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.process.step_2.title}}**

* **{{products_inventory.section_02.emergency_purchasing.process.step_2.intro}}**

{{#each products_inventory.section_02.emergency_purchasing.process.step_2.primary_items}}
  * {{this}}  
{{/each}}

  * #### **{{products_inventory.section_02.emergency_purchasing.process.step_2.if_cannot.title}}**

{{#each products_inventory.section_02.emergency_purchasing.process.step_2.if_cannot.items}}
    * {{this}}  
{{/each}}

**{{products_inventory.section_02.emergency_purchasing.process.step_3.title}}**

* **{{products_inventory.section_02.emergency_purchasing.process.step_3.intro}}**  
* **{{products_inventory.section_02.emergency_purchasing.process.step_3.document}}**  
{{#each products_inventory.section_02.emergency_purchasing.process.step_3.items}}
  * {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.process.step_4.title}}**

* **{{products_inventory.section_02.emergency_purchasing.process.step_4.intro}}**  
{{#each products_inventory.section_02.emergency_purchasing.process.step_4.items}}
  * {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.process.step_5.title}}**

* **{{products_inventory.section_02.emergency_purchasing.process.step_5.intro}}**

{{#each products_inventory.section_02.emergency_purchasing.process.step_5.items}}
  * {{this}}  
{{/each}}

{{#each products_inventory.section_02.emergency_purchasing.process.step_5.followup}}
  * **{{this}}**
{{/each}}

### **{{products_inventory.section_02.emergency_purchasing.supplier_network.subtitle}}**

#### **{{products_inventory.section_02.emergency_purchasing.supplier_network.intro.title}}**

{{products_inventory.section_02.emergency_purchasing.supplier_network.intro.description}}

#### **{{products_inventory.section_02.emergency_purchasing.supplier_network.fire_equipment.title}}**

{{#each products_inventory.section_02.emergency_purchasing.supplier_network.fire_equipment.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.supplier_network.ppe_workwear.title}}**

{{#each products_inventory.section_02.emergency_purchasing.supplier_network.ppe_workwear.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.supplier_network.general_industrial.title}}**

{{#each products_inventory.section_02.emergency_purchasing.supplier_network.general_industrial.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.emergency_purchasing.supplier_network.international.title}}**

{{#each products_inventory.section_02.emergency_purchasing.supplier_network.international.items}}
* {{this}}  
{{/each}}

## {{products_inventory.section_02.import_procedures.title}}

### **{{products_inventory.section_02.import_procedures.requirements.subtitle}}**

#### **{{products_inventory.section_02.import_procedures.requirements.regulatory.title}}**

{{#each products_inventory.section_02.import_procedures.requirements.regulatory.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.requirements.documentation.title}}**

{{#each products_inventory.section_02.import_procedures.requirements.documentation.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.process_flow.subtitle}}**

**{{products_inventory.section_02.import_procedures.process_flow.step_1.title}}**

{{#each products_inventory.section_02.import_procedures.process_flow.step_1.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.process_flow.step_2.title}}**

{{#each products_inventory.section_02.import_procedures.process_flow.step_2.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.process_flow.step_3.title}}**

{{#each products_inventory.section_02.import_procedures.process_flow.step_3.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.process_flow.step_4.title}}**

{{#each products_inventory.section_02.import_procedures.process_flow.step_4.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.import_procedures.process_flow.step_5.title}}**

{{#each products_inventory.section_02.import_procedures.process_flow.step_5.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.import_procedures.cost_calculation.subtitle}}**

#### **{{products_inventory.section_02.import_procedures.cost_calculation.landed_cost.title}}**

{{#each products_inventory.section_02.import_procedures.cost_calculation.landed_cost.items}}
* {{this}}  
{{/each}}

**{{products_inventory.section_02.import_procedures.cost_calculation.example.title}}**

{{#each products_inventory.section_02.import_procedures.cost_calculation.example.table.rows}}
| {{this.label}} | {{this.value}} |
{{/each}}

## {{products_inventory.section_02.receiving_qc.title}}

**{{products_inventory.section_02.receiving_qc.receiving.subtitle}}**

#### **{{products_inventory.section_02.receiving_qc.receiving.step_1.title}}**

{{#each products_inventory.section_02.receiving_qc.receiving.step_1.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.receiving.step_2.title}}**

{{#each products_inventory.section_02.receiving_qc.receiving.step_2.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.receiving.step_3.title}}**

{{#each products_inventory.section_02.receiving_qc.receiving.step_3.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.receiving.step_4.title}}**

{{#each products_inventory.section_02.receiving_qc.receiving.step_4.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.receiving_qc.quality_control.subtitle}}**

#### **{{products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.title}}**

**{{products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.fire_extinguishers.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.fire_extinguishers.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.ppe.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.ppe.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.raw_materials.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.incoming_inspection.raw_materials.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.testing.title}}**

**{{products_inventory.section_02.receiving_qc.quality_control.testing.frequency.subtitle}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.testing.frequency.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.testing.methods.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.testing.methods.items}}
* {{this}}  
{{/each}}

**{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.title}}**  
**{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.intro}}**

**{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_1.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_1.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_2.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_2.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_3.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_3.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_4.title}}**

{{#each products_inventory.section_02.receiving_qc.quality_control.non_conforming.step_4.items}}
* {{this}}  
{{/each}}

### **{{products_inventory.section_02.receiving_qc.documentation.subtitle}}**

#### **{{products_inventory.section_02.receiving_qc.documentation.required.title}}**

**{{products_inventory.section_02.receiving_qc.documentation.required.grn.subtitle}}**

{{#each products_inventory.section_02.receiving_qc.documentation.required.grn.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.documentation.required.supporting.title}}**

{{#each products_inventory.section_02.receiving_qc.documentation.required.supporting.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.documentation.wave_plus.title}}**

{{#each products_inventory.section_02.receiving_qc.documentation.wave_plus.items}}
* {{this}}  
{{/each}}

#### **{{products_inventory.section_02.receiving_qc.documentation.reporting.title}}**

{{#each products_inventory.section_02.receiving_qc.documentation.reporting.items}}
* {{this}}  
{{/each}}

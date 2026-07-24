# Titanium3DP content publication log

This log is the anti-duplication ledger for new, updated, merged, redirected, and rejected topics.

## 2026-07-24 baseline

### Published

- `titanium-am-standards-specifications-f2924-f3001-52948`
  - Primary path: engineering foundations
  - Distinct decision: map material, process, design, machine, test, NDT, data, aviation, and medical standards into a controlled purchase order
  - Long-term value: titanium AM standards and procurement
  - Current event value: ISO/ASTM 52948:2026 published; ISO/ASTM 52941 Edition 2 under publication
  - Sources: ASTM, ISO, and FDA official scope pages
  - Cannibalization check: complements the material-specific and qualification pages; does not replace them

### Architecture changes

- Existing engineering library mapped to six controlled decision paths.
- Thin public tag routes disabled and redirected to the engineering-guide library.
- Knowledge center added as the crawl and decision hub.
- Article-level knowledge pathways changed from one generic link block to cluster-aware links.

### Rejected or deferred

- Additional `Titanium 3D Printing for [industry]` pages
  - Reason: 24 existing titles already use the pattern; expansion without distinct decisions increases template and cannibalization risk.
- New commercial pages for every existing application article
  - Reason: the current engineering guides already serve the informational and early commercial intent; separate service pages require query and RFQ evidence.
- Immediate deletion of overlapping corrosion/process pages
  - Reason: merge and redirect decisions require current page/query evidence to protect ranking URLs.
- Salesforce implementation claims
  - Reason: no Salesforce API, Web-to-Lead, Connected App, field map, or verifiable repository implementation was found; current confirmed route is secure form to email.

## Entry template

Copy this block for each future decision:

```text
Date:
Status: published | updated | merged | redirected | rejected | deferred
URL or proposed slug:
Primary decision path:
Distinct search task:
Buyer output:
Primary sources:
Existing URLs reviewed:
Internal links added:
Conversion path:
Reason for decision:
Follow-up date or trigger:
```

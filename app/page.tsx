type Status = "attention" | "watch" | "good" | "info";

type Result = {
  group: string;
  test: string;
  value: string;
  range: string;
  status: Status;
};

const results: Result[] = [
  { group: "Cardiovascular", test: "Total cholesterol", value: "218 mg/dL", range: "Optimal <200", status: "attention" },
  { group: "Cardiovascular", test: "LDL cholesterol", value: "164 mg/dL", range: "Optimal <100", status: "attention" },
  { group: "Cardiovascular", test: "HDL cholesterol", value: "30.7 mg/dL", range: "Optimal >40", status: "attention" },
  { group: "Cardiovascular", test: "Non-HDL cholesterol", value: "187 mg/dL", range: "Optimal <130", status: "attention" },
  { group: "Cardiovascular", test: "Cholesterol / HDL ratio", value: "7.1", range: "Optimal <4.97", status: "attention" },
  { group: "Cardiovascular", test: "Triglycerides", value: "115 mg/dL", range: "30-150", status: "good" },
  { group: "Cardiovascular", test: "VLDL", value: "23 mg/dL", range: "4-40", status: "good" },
  { group: "Inflammation", test: "High-sensitivity CRP", value: "3.83 mg/L", range: "0.0-3.0", status: "attention" },
  { group: "Inflammation", test: "ESR", value: "7 mm/hr", range: "0-15", status: "good" },
  { group: "Iron", test: "Iron saturation", value: "17.8%", range: "20-55", status: "watch" },
  { group: "Iron", test: "Iron", value: "69.76 ug/dL", range: "37-160", status: "good" },
  { group: "Iron", test: "TIBC", value: "392 ug/dL", range: "245-400", status: "good" },
  { group: "Iron", test: "Ferritin", value: "109 ng/mL", range: "30-400", status: "good" },
  { group: "Iron", test: "UIBC", value: "322", range: "Not printed", status: "info" },
  { group: "Iron", test: "Transferrin", value: "279.85 mg/dL", range: "180-329", status: "good" },
  { group: "Vitamins", test: "Vitamin D 25-OH", value: "29 ng/mL", range: "Lab: 30-100", status: "watch" },
  { group: "Vitamins", test: "Vitamin B12", value: "502 pg/mL", range: "232-1245", status: "good" },
  { group: "Vitamins", test: "Folate", value: "10.1 ng/mL", range: ">4.5", status: "good" },
  { group: "Glucose", test: "Hemoglobin A1c", value: "5.5%", range: "Non-diabetic <5.7", status: "good" },
  { group: "Glucose", test: "Estimated average glucose", value: "111 mg/dL", range: "Calculated", status: "info" },
  { group: "Glucose", test: "Glucose", value: "92 mg/dL", range: "70-100", status: "good" },
  { group: "Kidney & metabolic", test: "Creatinine", value: "1.16 mg/dL", range: "0.70-1.30", status: "good" },
  { group: "Kidney & metabolic", test: "eGFR", value: "86 mL/min", range: "See interpretation", status: "watch" },
  { group: "Kidney & metabolic", test: "BUN", value: "14 mg/dL", range: "6-23", status: "good" },
  { group: "Kidney & metabolic", test: "BUN / creatinine ratio", value: "12.1", range: "6.0-28.6", status: "good" },
  { group: "Kidney & metabolic", test: "Sodium", value: "140 mEq/L", range: "132-143", status: "good" },
  { group: "Kidney & metabolic", test: "Potassium", value: "4.4 mEq/L", range: "3.6-5.1", status: "good" },
  { group: "Kidney & metabolic", test: "Chloride", value: "104 mEq/L", range: "95-112", status: "good" },
  { group: "Kidney & metabolic", test: "Carbon dioxide", value: "31 mEq/L", range: "19-31", status: "good" },
  { group: "Kidney & metabolic", test: "Anion gap", value: "9.4", range: "7-21", status: "good" },
  { group: "Kidney & metabolic", test: "Calcium", value: "9.2 mg/dL", range: "8.5-10.3", status: "good" },
  { group: "Liver & proteins", test: "AST", value: "24 U/L", range: "13-39", status: "good" },
  { group: "Liver & proteins", test: "ALT", value: "40 U/L", range: "7-52", status: "good" },
  { group: "Liver & proteins", test: "Alkaline phosphatase", value: "82 U/L", range: "31-120", status: "good" },
  { group: "Liver & proteins", test: "Total bilirubin", value: "0.67 mg/dL", range: "0.0-1.2", status: "good" },
  { group: "Liver & proteins", test: "Protein", value: "7.1 g/dL", range: "6.0-8.3", status: "good" },
  { group: "Liver & proteins", test: "Albumin", value: "4.7 g/dL", range: "3.5-5.0", status: "good" },
  { group: "Liver & proteins", test: "Globulin", value: "2.4 g/dL", range: "1.8-3.5", status: "good" },
  { group: "Liver & proteins", test: "A/G ratio", value: "2.0", range: "1.1-2.4", status: "good" },
  { group: "Thyroid", test: "TSH", value: "2.520 uIU/mL", range: "0.270-4.20", status: "good" },
  { group: "Thyroid", test: "Free T4", value: "0.97 ng/dL", range: "0.71-1.70", status: "good" },
  { group: "Thyroid", test: "Free T3", value: "2.9 pg/mL", range: "2.5-4.3", status: "good" },
  { group: "Thyroid", test: "Anti-T peroxidase", value: "9 IU/mL", range: "<34", status: "good" },
  { group: "Thyroid", test: "Anti-thyroglobulin", value: "<1 IU/mL", range: "<115", status: "good" },
  { group: "Blood count", test: "WBC", value: "7.7 K/uL", range: "3.6-11.2", status: "good" },
  { group: "Blood count", test: "RBC", value: "5.15 M/uL", range: "4.1-5.6", status: "good" },
  { group: "Blood count", test: "Hemoglobin", value: "15.1 g/dL", range: "13.5-18.0", status: "good" },
  { group: "Blood count", test: "Hematocrit", value: "46.2%", range: "41-50", status: "good" },
  { group: "Blood count", test: "MCV", value: "89.6 fL", range: "81-99", status: "good" },
  { group: "Blood count", test: "RDW", value: "13.8%", range: "11.0-15.0", status: "good" },
  { group: "Blood count", test: "MCH", value: "29 pg", range: "27-33", status: "good" },
  { group: "Blood count", test: "MCHC", value: "33 g/dL", range: "32-36", status: "good" },
  { group: "Blood count", test: "Platelets", value: "205 K/uL", range: "140-440", status: "good" },
  { group: "Blood count", test: "Absolute neutrophils", value: "3.66 K/uL", range: "1.8-7.8", status: "good" },
  { group: "Blood count", test: "Absolute lymphocytes", value: "3.46 K/uL", range: "0.6-3.4", status: "watch" },
  { group: "Hormones", test: "Total testosterone", value: "424 ng/dL", range: "180-917", status: "good" },
  { group: "Hormones", test: "Free testosterone", value: "10.07 ng/dL", range: "3.3-26.8", status: "good" },
  { group: "Hormones", test: "% free testosterone", value: "2.4%", range: "1.8-3.2", status: "good" },
  { group: "Hormones", test: "Sex hormone binding globulin", value: "22.5 nmol/L", range: "9-68", status: "good" },
  { group: "Hormones", test: "Morning cortisol", value: "10.10 ug/dL", range: "6.02-18.40", status: "good" },
];

const groups = Array.from(new Set(results.map((result) => result.group)));

const StatusDot = ({ status }: { status: Status }) => (
  <span className={`status-dot ${status}`} aria-label={status} />
);

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav wrap" aria-label="Page navigation">
          <a className="brand" href="#top"><span className="brand-mark">B</span><span>Annual Lab Review</span></a>
          <div className="nav-links">
            <a href="#priorities">Priorities</a>
            <a href="#complete-results">All results</a>
            <a href="#next-steps">Next steps</a>
          </div>
        </nav>
        <div className="hero-grid wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Annual blood work · Collected July 9, 2026</p>
            <h1>Mostly reassuring results, with one clear cardiovascular priority.</h1>
            <p className="dek">The strongest signal is the combination of high LDL, low HDL, high non-HDL cholesterol, and elevated hs-CRP. Iron saturation and vitamin D are borderline. Glucose, thyroid, liver, blood counts, and most kidney markers are otherwise reassuring.</p>
            <div className="hero-actions">
              <a className="button primary" href="#priorities">See what needs attention</a>
              <a className="button secondary" href="#complete-results">Review every value</a>
            </div>
            <p className="privacy-note">De-identified summary. Original reports are stored locally and are not published.</p>
          </div>
          <aside className="score-card" aria-label="At a glance">
            <div className="score-top"><span>At a glance</span><span className="date-chip">2026 annuals</span></div>
            <div className="score-ring"><strong>4</strong><span>items to discuss</span></div>
            <div className="score-legend">
              <span><StatusDot status="attention" /> 2 higher-priority</span>
              <span><StatusDot status="watch" /> 2 watch items</span>
              <span><StatusDot status="good" /> Most values in range</span>
            </div>
          </aside>
        </div>
      </header>

      <section className="wrap section" id="priorities">
        <div className="section-heading">
          <div><p className="eyebrow dark">Start here</p><h2>What the results suggest</h2></div>
          <p>These are patterns to discuss with a clinician, not diagnoses.</p>
        </div>
        <div className="priority-grid">
          <article className="priority-card attention-card">
            <div className="card-kicker"><span className="number">01</span><span>Discuss soon</span></div>
            <h3>Cholesterol is the main actionable finding</h3>
            <div className="metric-row"><div><strong>164</strong><span>LDL</span></div><div><strong>30.7</strong><span>HDL</span></div><div><strong>187</strong><span>non-HDL</span></div></div>
            <p>LDL is high, HDL is low, and the total-to-HDL ratio is high. Triglycerides are normal. This pattern increases long-term cardiovascular risk even when short-term risk is low at a younger age.</p>
            <p className="clinical-note">The 2026 AHA/ACC guideline calls for earlier risk discussion in young adults with LDL at or above 160 mg/dL. A clinician can place this in context using blood pressure, smoking status, family history, weight, and other risk factors.</p>
          </article>
          <article className="priority-card attention-card">
            <div className="card-kicker"><span className="number">02</span><span>Recheck when well</span></div>
            <h3>hs-CRP is elevated, but it is not specific</h3>
            <div className="single-metric"><strong>3.83</strong><span>mg/L · lab range 0.0-3.0</span></div>
            <p>hs-CRP can rise with infection, injury, strenuous exercise, dental inflammation, or other inflammatory states. ESR is normal at 7 mm/hr, which is reassuring but does not explain the hs-CRP result.</p>
            <p className="clinical-note">The report itself recommends repeating hs-CRP at least two weeks later when metabolically stable and free of acute illness. If repeated, the lower of two results is generally used.</p>
          </article>
          <article className="priority-card watch-card">
            <div className="card-kicker"><span className="number">03</span><span>Watch</span></div>
            <h3>Iron saturation is mildly low without anemia</h3>
            <div className="single-metric"><strong>17.8%</strong><span>lab range 20-55%</span></div>
            <p>Ferritin, iron, transferrin, hemoglobin, and red-cell size are in range. This means there is no anemia in the results shown, but the low saturation can be an early or temporary sign of reduced available iron.</p>
            <p className="clinical-note">Ask whether a repeat fasting iron panel is appropriate, especially if there is fatigue, restless legs, frequent blood donation, dietary restriction, or any bleeding.</p>
          </article>
          <article className="priority-card watch-card">
            <div className="card-kicker"><span className="number">04</span><span>Borderline</span></div>
            <h3>Vitamin D sits at a threshold that varies by standard</h3>
            <div className="single-metric"><strong>29</strong><span>ng/mL</span></div>
            <p>The reporting laboratory flags values below 30. NIH guidance notes that 20 ng/mL or more is adequate for most people, so this is best described as borderline rather than clearly deficient.</p>
            <p className="clinical-note">Discuss diet, sun exposure, and whether a modest supplement is appropriate. Avoid high-dose treatment without clinician guidance.</p>
          </article>
        </div>
      </section>

      <section className="reassuring-band">
        <div className="wrap reassuring-grid">
          <div><p className="eyebrow">The reassuring side</p><h2>Several major systems look stable.</h2></div>
          <div className="reassuring-list">
            <div><span>01</span><p><strong>Blood sugar</strong>A1c 5.5% and glucose 92 are in the non-diabetic range.</p></div>
            <div><span>02</span><p><strong>Thyroid</strong>TSH, free T4, free T3, and thyroid antibodies are in range.</p></div>
            <div><span>03</span><p><strong>Liver</strong>AST, ALT, bilirubin, alkaline phosphatase, and proteins are in range.</p></div>
            <div><span>04</span><p><strong>Blood count</strong>No anemia, platelet problem, or overall white-count elevation is shown.</p></div>
            <div><span>05</span><p><strong>Screening tests</strong>HIV, hepatitis C, syphilis, gonorrhea, chlamydia, and trichomonas are negative. Hepatitis B pattern indicates immunity.</p></div>
            <div><span>06</span><p><strong>Hormones</strong>Morning cortisol and total/free testosterone are within the printed ranges.</p></div>
          </div>
        </div>
      </section>

      <section className="wrap section nuance-section">
        <div className="section-heading"><div><p className="eyebrow dark">Context matters</p><h2>Two small flags that may not mean disease</h2></div></div>
        <div className="nuance-grid">
          <article><span className="mini-tag">Kidney</span><h3>eGFR 86 is not a CKD diagnosis by itself</h3><p>Creatinine is normal. NIDDK notes that an eGFR of 60 or more is generally considered normal unless other evidence of kidney damage is present. Kidney disease requires context such as urine albumin and persistence over time.</p></article>
          <article><span className="mini-tag">Blood count</span><h3>Absolute lymphocytes are only 0.06 above range</h3><p>The absolute lymphocyte count is 3.46 K/uL against an upper range of 3.4, while the total WBC is normal. Small isolated elevations are often transient. Trend it rather than treating one result as a diagnosis.</p></article>
        </div>
      </section>

      <section className="results-section" id="complete-results">
        <div className="wrap section">
          <div className="section-heading">
            <div><p className="eyebrow dark">Source transcription</p><h2>Complete visible results</h2></div>
            <div className="legend"><span><StatusDot status="attention" /> Out of range</span><span><StatusDot status="watch" /> Review</span><span><StatusDot status="good" /> In range</span></div>
          </div>
          <div className="results-groups">
            {groups.map((group) => (
              <details key={group} open={["Cardiovascular", "Inflammation", "Iron"].includes(group)}>
                <summary><span>{group}</span><span>{results.filter((item) => item.group === group).length} results</span></summary>
                <div className="table-wrap"><table><thead><tr><th>Status</th><th>Test</th><th>Result</th><th>Printed reference</th></tr></thead><tbody>
                  {results.filter((item) => item.group === group).map((item) => (
                    <tr key={item.test}><td><StatusDot status={item.status} /></td><td>{item.test}</td><td><strong>{item.value}</strong></td><td>{item.range}</td></tr>
                  ))}
                </tbody></table></div>
              </details>
            ))}
          </div>
          <p className="missing-note"><strong>Completeness note:</strong> The supplied images include pages 1 through 7 of an 8-page report plus a separate one-page STI report. Page 8 was not included, so this dashboard does not claim to include any values that may appear there. Only clearly visible results were transcribed.</p>
        </div>
      </section>

      <section className="wrap section" id="next-steps">
        <div className="next-grid">
          <div><p className="eyebrow dark">Take to your appointment</p><h2>A focused follow-up plan</h2><p className="next-intro">No emergency is apparent in the values shown. A routine clinician follow-up is appropriate, with the lipid pattern as the central topic.</p></div>
          <ol className="steps">
            <li><span>1</span><div><strong>Review overall cardiovascular risk</strong><p>Discuss LDL 164, HDL 30.7, non-HDL 187, hs-CRP, blood pressure, smoking status, family history of early heart disease, diet, exercise, and weight.</p></div></li>
            <li><span>2</span><div><strong>Ask about repeat or additional lipid testing</strong><p>Confirm whether the sample was fasting. Ask when to repeat the lipid panel and whether one-time lipoprotein(a), ApoB, or familial hypercholesterolemia assessment is appropriate.</p></div></li>
            <li><span>3</span><div><strong>Repeat hs-CRP when fully well</strong><p>Wait at least two weeks after any acute illness or inflammatory event, following the laboratory note and clinician advice.</p></div></li>
            <li><span>4</span><div><strong>Clarify the iron and vitamin D plan</strong><p>Ask whether diet changes, repeat testing, or a clinician-directed supplement is warranted. Do not start high-dose iron or vitamin D solely from this dashboard.</p></div></li>
            <li><span>5</span><div><strong>Fill the missing source page</strong><p>Add page 8 of the main report before treating this as a fully complete annual-lab record.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="sources-section">
        <div className="wrap sources-grid">
          <div><p className="eyebrow dark">Method & sources</p><h2>How to read this dashboard</h2></div>
          <div>
            <p>Lab ranges are copied from the supplied Interpath report. Interpretation was checked against current public-health and professional guidance. References are educational and do not replace care from a licensed clinician.</p>
            <ul>
              <li><a href="https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know">AHA/ACC 2026 Dyslipidemia Guideline: Top Things to Know</a></li>
              <li><a href="https://www.cdc.gov/cholesterol/about/ldl-and-hdl-cholesterol-and-triglycerides.html">CDC: LDL, HDL, and triglycerides</a></li>
              <li><a href="https://ods.od.nih.gov/factsheets/VitaminD-Consumer/">NIH Office of Dietary Supplements: Vitamin D</a></li>
              <li><a href="https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis">NIDDK: Chronic kidney disease tests and diagnosis</a></li>
            </ul>
          </div>
        </div>
      </section>

      <footer><div className="wrap footer-grid"><div><strong>Annual Lab Review</strong><span>Prepared July 14, 2026</span></div><p>Educational summary only. Seek urgent care for urgent symptoms regardless of laboratory results.</p></div></footer>
    </main>
  );
}

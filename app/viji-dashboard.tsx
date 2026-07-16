import { testInfo } from "./test-info";

type Status = "attention" | "watch" | "good" | "info";
type Result = { group: string; test: string; value: string; range: string; status: Status; meaning: string };

const vijiResults: Result[] = [
  { group: "Thyroid", test: "TSH", value: "4.770 uIU/mL", range: "0.270-4.20", status: "attention", meaning: "Mildly above the printed range while free T4 and free T3 remain in range. Together with strongly positive thyroid antibodies, this is an autoimmune-thyroid pattern with mild or subclinical underactivity, not overt hypothyroidism." },
  { group: "Thyroid", test: "Free T4", value: "1.28 ng/dL", range: "0.71-1.70", status: "good", meaning: "Within the printed range. This is reassuring and is why the current pattern is mild rather than overt hypothyroidism." },
  { group: "Thyroid", test: "Free T3", value: "4.2 pg/mL", range: "2.5-4.3", status: "good", meaning: "Within the printed range, near its upper end. TSH and free T4 are generally more important for deciding whether hypothyroidism is present." },
  { group: "Thyroid", test: "Anti-T peroxidase", value: "685 IU/mL", range: "<34", status: "attention", meaning: "Strongly positive. This supports autoimmune thyroid inflammation, commonly a Hashimoto pattern. The antibody number itself is not used to set a medication dose." },
  { group: "Thyroid", test: "Anti-thyroglobulin", value: "1711 IU/mL", range: "<115", status: "attention", meaning: "Strongly positive and supportive of autoimmune thyroid disease. Follow thyroid function with TSH and free T4 rather than repeatedly chasing the antibody level." },

  { group: "Cardiovascular", test: "Total cholesterol", value: "182 mg/dL", range: "Optimal <200", status: "good", meaning: "Within the laboratory's optimal range, although the LDL, HDL, non-HDL, and ratio provide the more important detail." },
  { group: "Cardiovascular", test: "LDL cholesterol", value: "130 mg/dL", range: "Optimal <100", status: "attention", meaning: "Above the printed target. LDL contributes to plaque formation over time, so the result should be interpreted with blood pressure, smoking, diabetes, family history, and thyroid status." },
  { group: "Cardiovascular", test: "HDL cholesterol", value: "35.3 mg/dL", range: "Optimal >40", status: "attention", meaning: "Below the printed target. Low HDL can accompany inactivity, smoking, insulin resistance, genetics, or other metabolic factors, but treatment focuses on overall cardiovascular risk rather than raising HDL alone." },
  { group: "Cardiovascular", test: "Non-HDL cholesterol", value: "147 mg/dL", range: "Optimal <130", status: "attention", meaning: "Above the printed target. This represents all cholesterol carried by potentially plaque-forming particles." },
  { group: "Cardiovascular", test: "Cholesterol / HDL ratio", value: "5.2", range: "Optimal <4.44", status: "attention", meaning: "Above the printed target because HDL is low relative to total cholesterol. It is a supporting risk marker, not a stand-alone diagnosis." },
  { group: "Cardiovascular", test: "Triglycerides", value: "82 mg/dL", range: "30-150", status: "good", meaning: "Within range and reassuring." },
  { group: "Cardiovascular", test: "VLDL", value: "16 mg/dL", range: "4-40", status: "good", meaning: "Within the printed range." },

  { group: "Iron", test: "Iron", value: "86.15 ug/dL", range: "37-160", status: "good", meaning: "Within the printed range. Serum iron varies during the day and is best read with ferritin, TIBC, saturation, and the blood count." },
  { group: "Iron", test: "TIBC", value: "426 ug/dL", range: "245-400", status: "watch", meaning: "Mildly high. When paired with ferritin 26.1 and saturation 20.2%, this may suggest iron stores are on the lower side even though anemia is not present." },
  { group: "Iron", test: "Iron saturation", value: "20.2%", range: "20-55", status: "watch", meaning: "At the very bottom of the printed range. It does not show iron deficiency by itself, but fits with the low-normal ferritin and high TIBC." },
  { group: "Iron", test: "Ferritin", value: "26.1 ng/mL", range: "13-150", status: "watch", meaning: "Within the printed range but toward the lower end. Ferritin reflects stored iron and can be reviewed in context of fatigue, hair loss, restless legs, diet, pregnancy, and menstrual blood loss." },
  { group: "Iron", test: "UIBC", value: "340", range: "Not printed", status: "info", meaning: "A component of iron-binding capacity. The report does not print a reference interval, so it should be interpreted as part of the full iron panel." },
  { group: "Iron", test: "Transferrin", value: "304.64 mg/dL", range: "192-382", status: "good", meaning: "Within the printed range." },

  { group: "Inflammation", test: "High-sensitivity CRP", value: "3.05 mg/L", range: "0.0-3.0", status: "watch", meaning: "Only 0.05 above the printed range. hs-CRP is nonspecific and can rise with a recent infection, exercise, dental inflammation, autoimmune activity, or other inflammation. It is best repeated when fully well." },
  { group: "Inflammation", test: "ESR", value: "30 mm/hr", range: "0-20", status: "attention", meaning: "Elevated, indicating a nonspecific inflammatory signal. ESR cannot identify the cause and can also vary with menstruation, pregnancy, anemia, age, and other factors." },

  { group: "Female hormones", test: "FSH", value: "2.28 mIU/mL", range: "Cycle-phase dependent", status: "info", meaning: "The value can be normal in the luteal phase but would be below the report's follicular range. Interpretation requires the menstrual-cycle day, pregnancy status, and any hormonal medication." },
  { group: "Female hormones", test: "LH", value: "10.10 mIU/mL", range: "Cycle-phase dependent", status: "info", meaning: "Within the report's follicular and luteal ranges but below its ovulation-surge range. A single LH value does not determine whether ovulation occurred." },
  { group: "Female hormones", test: "Estradiol", value: "145 pg/mL", range: "Cycle-phase dependent", status: "info", meaning: "Falls within several printed premenopausal phase ranges. It cannot be labeled high or low without the cycle day and clinical purpose of testing." },
  { group: "Female hormones", test: "Progesterone", value: "10.0 ng/mL", range: "Cycle-phase dependent", status: "info", meaning: "Fits within the printed luteal and ovulation ranges and is above the follicular range. Timing is essential because progesterone rises after ovulation." },
  { group: "Female hormones", test: "Prolactin", value: "17.90 ng/mL", range: "4.79-23.3", status: "good", meaning: "Within the printed range." },
  { group: "Female hormones", test: "DHEA-S", value: "344.0 ug/dL", range: "98.8-340", status: "watch", meaning: "Only slightly above the printed upper limit. This adrenal androgen is interpreted with acne, excess facial or body hair, scalp hair loss, cycle irregularity, fertility history, medicines, and other hormone tests. It does not diagnose PCOS by itself." },
  { group: "Female hormones", test: "Testosterone LC/MS", value: "25 ng/dL", range: "9-55", status: "good", meaning: "Within the printed premenopausal range." },
  { group: "Female hormones", test: "Anti-Mullerian hormone", value: "2.663 ng/mL", range: "0.176-11.705 (age 30-39)", status: "good", meaning: "Within the laboratory's age-based range. AMH estimates ovarian reserve or expected response to fertility treatment, but one value does not predict natural fertility, egg quality, time to pregnancy, or live birth." },

  { group: "Vitamins", test: "Vitamin D 25-OH", value: "47 ng/mL", range: "30-100", status: "good", meaning: "Within the printed optimal range." },
  { group: "Vitamins", test: "Vitamin B12", value: "459 pg/mL", range: "232-1245", status: "good", meaning: "Within the printed range." },
  { group: "Vitamins", test: "Folate", value: "9.6 ng/mL", range: ">4.5", status: "good", meaning: "Above the printed minimum and in range." },
  { group: "Vitamins", test: "Methylmalonic acid", value: "Negative", range: "0.08-0.40 umol/L", status: "good", meaning: "Reported negative. This is reassuring against functional vitamin B12 deficiency in the context of a normal B12 level." },

  { group: "Glucose", test: "Hemoglobin A1c", value: "5.3%", range: "Non-diabetic <5.7", status: "good", meaning: "In the non-diabetic range and consistent with normal average glucose over roughly the prior two to three months." },
  { group: "Glucose", test: "Estimated average glucose", value: "105 mg/dL", range: "Calculated", status: "info", meaning: "A calculated translation of the A1c result, not a separate blood draw." },
  { group: "Glucose", test: "Glucose", value: "84 mg/dL", range: "70-100", status: "good", meaning: "Within the printed range." },

  { group: "Kidney & metabolic", test: "Creatinine", value: "0.67 mg/dL", range: "0.60-1.20", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "eGFR", value: "120 mL/min", range: "Normal ≥90", status: "good", meaning: "In the normal or increased filtration category printed by the laboratory." },
  { group: "Kidney & metabolic", test: "BUN", value: "10 mg/dL", range: "6-23", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "BUN / creatinine ratio", value: "14.9", range: "6.0-28.6", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Sodium", value: "137 mEq/L", range: "132-143", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Potassium", value: "4.0 mEq/L", range: "3.6-5.1", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Chloride", value: "103 mEq/L", range: "95-112", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Carbon dioxide", value: "26 mEq/L", range: "19-31", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Anion gap", value: "12.0", range: "7-21", status: "good", meaning: "Within the printed range." },
  { group: "Kidney & metabolic", test: "Calcium", value: "8.6 mg/dL", range: "8.5-10.3", status: "good", meaning: "Within the printed range, close to its lower end." },

  { group: "Liver & proteins", test: "AST", value: "14 U/L", range: "13-39", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "ALT", value: "11 U/L", range: "7-52", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "Alkaline phosphatase", value: "56 U/L", range: "31-130", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "Total bilirubin", value: "0.64 mg/dL", range: "0.0-1.2", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "Protein", value: "7.7 g/dL", range: "6.0-8.3", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "Albumin", value: "4.3 g/dL", range: "3.5-5.0", status: "good", meaning: "Within the printed range." },
  { group: "Liver & proteins", test: "Globulin", value: "3.4 g/dL", range: "1.8-3.5", status: "good", meaning: "Within the printed range, near its upper end." },
  { group: "Liver & proteins", test: "A/G ratio", value: "1.30", range: "1.1-2.4", status: "good", meaning: "Within the printed range." },

  { group: "Blood count", test: "WBC", value: "5.3 K/uL", range: "3.6-11.2", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "RBC", value: "4.60 M/uL", range: "3.8-5.1", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Hemoglobin", value: "12.9 g/dL", range: "11.6-15.1", status: "good", meaning: "Within the printed range, with no anemia shown." },
  { group: "Blood count", test: "Hematocrit", value: "39.9%", range: "35-45", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "MCV", value: "86.8 fL", range: "81-99", status: "good", meaning: "Within the printed range, indicating average-sized red cells." },
  { group: "Blood count", test: "RDW", value: "14.8%", range: "11.0-15.0", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "MCH", value: "28 pg", range: "27-33", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "MCHC", value: "32 g/dL", range: "32-36", status: "good", meaning: "At the lower limit of the printed range." },
  { group: "Blood count", test: "Platelets", value: "360 K/uL", range: "140-440", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Neutrophils (%)", value: "58.3%", range: "Not evaluated", status: "info", meaning: "A percentage of white cells. The laboratory did not assign a reference interval; the absolute neutrophil count is in range." },
  { group: "Blood count", test: "Bands (%)", value: "0.0%", range: "Not evaluated", status: "info", meaning: "No band cells were reported." },
  { group: "Blood count", test: "Lymphocytes (%)", value: "30.2%", range: "Not evaluated", status: "info", meaning: "A percentage of white cells. The absolute lymphocyte count is in range." },
  { group: "Blood count", test: "Monocytes (%)", value: "8.8%", range: "Not evaluated", status: "info", meaning: "A percentage of white cells. The absolute monocyte count is in range." },
  { group: "Blood count", test: "Eosinophils (%)", value: "2.3%", range: "Not evaluated", status: "info", meaning: "A percentage of white cells. The absolute eosinophil count is in range." },
  { group: "Blood count", test: "Basophils (%)", value: "0.4%", range: "Not evaluated", status: "info", meaning: "A percentage of white cells. The absolute basophil count is in range." },
  { group: "Blood count", test: "Other white cells (%)", value: "0.0%", range: "Not evaluated", status: "info", meaning: "No other white-cell category was reported." },
  { group: "Blood count", test: "Absolute neutrophils", value: "3.09 K/uL", range: "1.8-7.8", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute bands", value: "0.00 K/uL", range: "0.0-0.6", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute lymphocytes", value: "1.60 K/uL", range: "0.6-3.4", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute monocytes", value: "0.47 K/uL", range: "0.0-1.1", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute eosinophils", value: "0.12 K/uL", range: "0.0-0.7", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute basophils", value: "0.02 K/uL", range: "0.0-0.2", status: "good", meaning: "Within the printed range." },
  { group: "Blood count", test: "Absolute other white cells", value: "0.00 K/uL", range: "0.0", status: "good", meaning: "No other absolute white-cell category was reported." },

  { group: "Hormones", test: "Morning cortisol", value: "15.90 ug/dL", range: "6.02-18.40", status: "good", meaning: "Within the printed morning range for the 8:33 AM collection time." },

  { group: "Infection screening", test: "Treponemal antibody total", value: "Non-reactive", range: "Non-reactive", status: "good", meaning: "No serologic evidence of syphilis was detected by this screening test." },
  { group: "Infection screening", test: "Hepatitis B surface antigen", value: "Negative", range: "Negative", status: "good", meaning: "No hepatitis B surface antigen was detected." },
  { group: "Infection screening", test: "Hepatitis B surface antibody", value: "Positive", range: "See interpretation", status: "good", meaning: "Together with a negative surface antigen, the laboratory interprets this as immunity to hepatitis B." },
  { group: "Infection screening", test: "Hepatitis C antibody", value: "Negative", range: "Negative", status: "good", meaning: "No hepatitis C antibodies were detected." },
  { group: "Infection screening", test: "HIV 1/2 antigen/antibody", value: "Non-reactive", range: "Non-reactive", status: "good", meaning: "No HIV antigen or antibodies were detected by this screening test." },
  { group: "Infection screening", test: "Gonorrhea RNA", value: "Negative", range: "Negative", status: "good", meaning: "No gonorrhea RNA was detected in the urine sample." },
  { group: "Infection screening", test: "Chlamydia RNA", value: "Negative", range: "Negative", status: "good", meaning: "No chlamydia RNA was detected in the urine sample." },
  { group: "Infection screening", test: "Trichomonas RNA", value: "Negative", range: "Negative", status: "good", meaning: "No trichomonas RNA was detected in the urine sample." },
];

const groups = Array.from(new Set(vijiResults.map((result) => result.group)));
const StatusDot = ({ status }: { status: Status }) => <span className={`status-dot ${status}`} aria-label={status} />;

function Results() {
  return <section className="results-section" id="viji-complete-results"><div className="wrap section">
    <div className="section-heading"><div><p className="eyebrow dark">Source transcription</p><h2>Complete visible results</h2></div><div className="legend"><span><StatusDot status="attention" /> Out of range</span><span><StatusDot status="watch" /> Review</span><span><StatusDot status="good" /> In range</span></div></div>
    <div className="results-help"><span className="info-icon static" aria-hidden="true">i</span><p><strong>Every test is explained.</strong> Select any result row to reveal what it measures, why it may have been ordered, what Viji&apos;s value means, what an abnormal value can indicate, and the usual next step.</p></div>
    <div className="results-groups">{groups.map((group) => <details className="result-category" key={group} open={["Thyroid", "Cardiovascular", "Inflammation"].includes(group)}>
      <summary className="category-summary"><span>{group}</span><span>{vijiResults.filter((item) => item.group === group).length} results</span></summary>
      <div className="result-list"><div className="result-row result-row-head" aria-hidden="true"><span>Status</span><span>Test</span><span>Result</span><span>Printed reference</span></div>
        {vijiResults.filter((item) => item.group === group).map((item) => {
          const info = testInfo[item.test];
          return <details className={`result-item ${item.status}`} key={item.test}><summary className="result-row" aria-label={`Explain ${item.test}`}><span className="status-cell"><StatusDot status={item.status} /></span><span className="test-cell"><span>{item.test}</span><span className="info-icon" aria-hidden="true">i</span></span><span className="value-cell"><strong>{item.value}</strong></span><span className="range-cell">{item.range}</span></summary>
            <div className="result-explanation"><div><span className="explanation-label">What it measures</span><p>{info.measures}</p></div><div><span className="explanation-label">Why it may have been ordered</span><p>{info.why}</p></div><div className="your-result"><span className="explanation-label">What Viji&apos;s result means</span><p>{item.meaning}</p></div><div><span className="explanation-label">If it is outside range</span><p>{info.abnormal}</p></div><div><span className="explanation-label">Usual recommended approach</span><p>{info.next}</p></div><p className="explanation-disclaimer">General education only. Symptoms, menstrual-cycle timing, pregnancy status, medicines, trends, and medical history can change the interpretation.</p></div>
          </details>;
        })}
      </div>
    </details>)}</div>
    <p className="missing-note"><strong>Completeness note:</strong> All 13 supplied scan pages were reviewed. The report contains an 11-page main panel, a separate methylmalonic-acid confirmation page, and a separate one-page urine STI report. Only clearly legible values were transcribed.</p>
  </div></section>;
}

export function VijiDashboard() {
  return <main>
    <header className="hero"><nav className="nav wrap" aria-label="Viji dashboard navigation"><a className="brand" href="#viji"><span className="brand-mark">V</span><span>Viji · Annual Lab Review</span></a><div className="nav-links"><a href="#viji-priorities">Priorities</a><a href="#viji-complete-results">All results</a><a href="#viji-next-steps">Next steps</a></div></nav>
      <div className="hero-grid wrap"><div className="hero-copy"><p className="eyebrow">Annual blood work · Collected July 9, 2026</p><h1>A thyroid-focused follow-up, with several reassuring systems.</h1><p className="dek">Strongly positive thyroid antibodies with mildly high TSH are the clearest finding. Cholesterol, inflammatory markers, and low-side iron stores also deserve review. Glucose, kidney, liver, blood counts, vitamins, and infection screening are reassuring.</p><div className="hero-actions"><a className="button primary" href="#viji-priorities">See what needs attention</a><a className="button secondary" href="#viji-complete-results">Review every value</a></div><p className="privacy-note">De-identified public summary. Viji&apos;s original report is stored locally and is not published.</p></div>
        <aside className="score-card"><div className="score-top"><span>At a glance</span><span className="date-chip">2026 annuals</span></div><div className="score-ring"><strong>4</strong><span>topics to discuss</span></div><div className="score-legend"><span><StatusDot status="attention" /> Thyroid is the priority</span><span><StatusDot status="watch" /> Lipids, inflammation, iron</span><span><StatusDot status="good" /> Most systems reassuring</span></div></aside>
      </div>
    </header>

    <section className="wrap section" id="viji-priorities"><div className="section-heading"><div><p className="eyebrow dark">Start here</p><h2>What Viji&apos;s results suggest</h2></div><p>These are patterns to discuss with a clinician, not diagnoses.</p></div>
      <div className="priority-grid">
        <article className="priority-card attention-card"><div className="card-kicker"><span className="number">01</span><span>Priority follow-up</span></div><h3>Autoimmune thyroid pattern with mild underactivity</h3><div className="metric-row"><div><strong>4.77</strong><span>TSH, high</span></div><div><strong>685</strong><span>TPO Ab</span></div><div><strong>1711</strong><span>Tg Ab</span></div></div><p>Free T4 and free T3 are still in range. This combination commonly fits autoimmune thyroiditis with mild or subclinical hypothyroidism, rather than overt hypothyroidism.</p><p className="clinical-note">Review symptoms and repeat TSH/free T4 with her clinician. If she is pregnant, trying to conceive, or planning fertility treatment, contact the clinician promptly because thyroid targets and treatment decisions are different.</p></article>
        <article className="priority-card attention-card"><div className="card-kicker"><span className="number">02</span><span>Cardiovascular</span></div><h3>LDL is high and HDL is low</h3><div className="metric-row"><div><strong>130</strong><span>LDL</span></div><div><strong>35.3</strong><span>HDL</span></div><div><strong>147</strong><span>non-HDL</span></div></div><p>Total cholesterol and triglycerides are in range, but LDL, non-HDL, HDL, and the ratio are outside the laboratory targets. Mild thyroid underactivity can sometimes contribute.</p><p className="clinical-note">Discuss diet quality, exercise, blood pressure, smoking, diabetes, family history, and when to repeat the lipid panel after the thyroid plan is clear.</p></article>
        <article className="priority-card watch-card"><div className="card-kicker"><span className="number">03</span><span>Interpret with symptoms</span></div><h3>Two nonspecific inflammation markers are elevated</h3><div className="metric-row"><div><strong>30</strong><span>ESR</span></div><div><strong>3.05</strong><span>hs-CRP</span></div><div><strong>Normal</strong><span>CBC</span></div></div><p>Neither ESR nor hs-CRP identifies a cause. Autoimmune activity, recent infection, menstruation, exercise, and other factors can affect them.</p><p className="clinical-note">Repeat when fully well if the clinician agrees, and review any fever, joint symptoms, swelling, fatigue, infection, or other inflammatory symptoms.</p></article>
        <article className="priority-card watch-card"><div className="card-kicker"><span className="number">04</span><span>Context needed</span></div><h3>Iron and reproductive hormones need context, not labels</h3><div className="metric-row"><div><strong>26.1</strong><span>ferritin</span></div><div><strong>344</strong><span>DHEA-S</span></div><div><strong>2.663</strong><span>AMH</span></div></div><p>There is no anemia, but ferritin is low-normal and TIBC is high. DHEA-S is only slightly above range. FSH, LH, estradiol, and progesterone depend strongly on cycle timing.</p><p className="clinical-note">Bring the cycle day, pregnancy status, contraception or fertility medicines, bleeding pattern, hair or skin symptoms, and fertility goal to the appointment. AMH alone does not predict natural fertility.</p></article>
      </div>
    </section>

    <section className="reassuring-band"><div className="wrap reassuring-grid"><div><p className="eyebrow">The reassuring side</p><h2>Several major systems look stable.</h2></div><div className="reassuring-list"><div><span>01</span><p><strong>Blood sugar</strong>A1c 5.3% and glucose 84 are in range.</p></div><div><span>02</span><p><strong>Kidney and liver</strong>Creatinine, eGFR, electrolytes, liver enzymes, bilirubin, and proteins are in range.</p></div><div><span>03</span><p><strong>Blood count</strong>No anemia, platelet abnormality, or white-count elevation is shown.</p></div><div><span>04</span><p><strong>Vitamins</strong>Vitamin D, B12, folate, and methylmalonic-acid screening are reassuring.</p></div><div><span>05</span><p><strong>Screening tests</strong>HIV, hepatitis C, syphilis, gonorrhea, chlamydia, and trichomonas are negative. Hepatitis B pattern indicates immunity.</p></div><div><span>06</span><p><strong>Other hormones</strong>Prolactin, morning cortisol, and testosterone are within printed ranges.</p></div></div></div></section>

    <section className="wrap section nuance-section"><div className="section-heading"><div><p className="eyebrow dark">Context matters</p><h2>Two results that should not be over-read</h2></div></div><div className="nuance-grid"><article><span className="mini-tag">Fertility</span><h3>AMH is not a pregnancy forecast</h3><p>AMH 2.663 is within the report&apos;s age range and can help estimate ovarian reserve or response to stimulation. It does not measure egg quality or reliably predict natural conception, time to pregnancy, miscarriage, or live birth.</p></article><article><span className="mini-tag">Androgens</span><h3>DHEA-S is only 4 units over range</h3><p>The result is 344 against an upper limit of 340, while testosterone is normal. Interpret it with symptoms and menstrual history. This small isolated elevation does not establish PCOS or an adrenal disorder.</p></article></div></section>

    <Results />

    <section className="wrap section" id="viji-next-steps"><div className="next-grid"><div><p className="eyebrow dark">Take to the appointment</p><h2>A focused follow-up plan</h2><p className="next-intro">No emergency is apparent in the reported values. The thyroid pattern deserves timely routine follow-up, especially if pregnancy is current or planned.</p></div><ol className="steps"><li><span>1</span><div><strong>Review the thyroid pattern</strong><p>Discuss TSH 4.77, normal free T4, very high TPO and thyroglobulin antibodies, symptoms, prior thyroid history, family history, and repeat-testing or treatment timing.</p></div></li><li><span>2</span><div><strong>Flag pregnancy or fertility plans</strong><p>Tell the clinician now if Viji is pregnant, trying to conceive, or using fertility treatment. Bring the menstrual-cycle day and any hormone medication to interpret the reproductive panel.</p></div></li><li><span>3</span><div><strong>Review cardiovascular risk</strong><p>Discuss LDL 130, HDL 35.3, non-HDL 147, blood pressure, family history, activity, diet, smoking status, and whether thyroid management may change the lipid trend.</p></div></li><li><span>4</span><div><strong>Repeat inflammation markers when well</strong><p>Ask whether ESR and hs-CRP should be repeated after any illness, heavy exercise, or other temporary inflammatory trigger has resolved.</p></div></li><li><span>5</span><div><strong>Clarify iron and androgen follow-up</strong><p>Review ferritin 26.1, high TIBC, menstrual loss, fatigue or hair symptoms, and the minimally high DHEA-S. Do not start iron or hormone treatment from this dashboard alone.</p></div></li></ol></div></section>

    <section className="sources-section"><div className="wrap sources-grid"><div><p className="eyebrow dark">Method & sources</p><h2>How to read this dashboard</h2></div><div><p>Lab ranges are copied from the supplied Interpath report. Interpretation was checked against current professional and public-health guidance. References are educational and do not replace care from a licensed clinician.</p><ul><li><a href="https://www.thyroid.org/hashimotos-thyroiditis/">American Thyroid Association: Hashimoto&apos;s thyroiditis</a></li><li><a href="https://www.thyroid.org/thyroid-disease-and-pregnancy/">American Thyroid Association: Thyroid disease and pregnancy</a></li><li><a href="https://www.cdc.gov/cholesterol/about/ldl-and-hdl-cholesterol-and-triglycerides.html">CDC: LDL, HDL, and triglycerides</a></li><li><a href="https://medlineplus.gov/lab-tests/erythrocyte-sedimentation-rate-esr/">MedlinePlus: ESR</a></li><li><a href="https://medlineplus.gov/lab-tests/dhea-sulfate-test/">MedlinePlus: DHEA-S</a></li><li><a href="https://medlineplus.gov/lab-tests/ferritin-blood-test/">MedlinePlus: Ferritin</a></li><li><a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/04/the-use-of-antimullerian-hormone-in-women-not-seeking-fertility-care">ACOG: Uses and limits of AMH</a></li></ul></div></div></section>
    <footer><div className="wrap footer-grid"><div><strong>Viji · Annual Lab Review</strong><span>Prepared July 15, 2026</span></div><p>Educational summary only. Seek urgent care for urgent symptoms regardless of laboratory results.</p></div></footer>
  </main>;
}

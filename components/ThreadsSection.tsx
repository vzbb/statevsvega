import React, { useState } from 'react';
import { 
  GitMerge, 
  UserX, 
  Unlock, 
  AlertOctagon, 
  EyeOff, 
  Radio, 
  Skull, 
  Siren, 
  ChevronDown, 
  ChevronUp,
  Fingerprint,
  Lock,
  Accessibility,
  Target,
  Activity,
  ChevronRight,
  FileText
} from 'lucide-react';
import { ViewState } from '../types';

interface Thread {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  summary: string;
  documentTitle: string;
  fullContent: string[];
  points: string[];
  color: string; // For the ambient glow effect
  themeColor: string; // Base color name for dynamic hover classes (e.g., 'indigo', 'teal')
}

interface ThreadsSectionProps {
  setView: (view: ViewState) => void;
  onThemeChange?: (color: string | null) => void;
}

const ThreadsSection: React.FC<ThreadsSectionProps> = ({ setView, onThemeChange }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleThread = (id: number) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    
    if (onThemeChange) {
      const activeThread = threads.find(t => t.id === newId);
      onThemeChange(activeThread ? activeThread.themeColor : null);
    }
  };

  const threads: Thread[] = [
    {
      id: 1,
      title: "The Becker Contagion",
      subtitle: "Systemic Misidentification as Foundational Due Process Violation",
      icon: <Fingerprint className="text-indigo-400" size={24} />,
      color: "bg-indigo-500",
      themeColor: "indigo",
      summary: "The pervasive and uncorrected misidentification of Christopher Foster as 'Ed Becker' throughout all official documentation and discovery materials is not merely a procedural error or a simple Brady violation, but a fundamental corruption of the evidentiary record that has systemically infected every stage of the proceedings against Michael Vega.",
      documentTitle: "MEMORANDUM ON IDENTITY: THE 'BECKER' ANOMALY",
      fullContent: [
        "The pervasive and uncorrected misidentification of Christopher Foster as 'Ed Becker' throughout all official documentation and discovery materials is not merely a procedural error or a simple Brady violation, but a fundamental corruption of the evidentiary record that has systemically infected every stage of the proceedings against Michael Vega. This 'Becker Contagion' has created a misleading narrative from inception, constituting a form of constructive fraud on the defense and potentially rising to the level of Outrageous Government Conduct, making a fair trial predicated on this discovery virtually impossible.",
        "Effects/Consequences",
        "● Ubiquitous Falsehood: It’s critical that emphasis is placed on the fact that Foster is recorded only as 'Ed Becker' in 'every police form, document, and narrative', despite body-camera footage unmistakably showing Foster’s face. This isn't an isolated mistake; it's a consistent, systemic misrepresentation.",
        "● Concealment of Truth: This misidentification actively concealed Foster's status as Ashtabula County’s #1 Most-Wanted fugitive and his decade-long drug trafficking record, thereby skewing the entire prosecutorial theory and the defense's initial understanding of the case.",
        "● Impact Cascade: This initial, fundamental error irrevocably taints every subsequent step:",
        "○ Law Enforcement Reports: Based on false information, leading to a skewed official record.",
        "○ Prosecutorial Charging Decisions: Likely made without full knowledge of Foster's true identity and threat level, or, more troublingly, with such knowledge but providing discovery that obfuscates it.",
        "○ Defense's Initial Assessment: The defense, upon receiving discovery, is presented with a narrative involving an 'Ed Becker,' not a 'Most Wanted' fugitive, fundamentally altering their perception of Vega's duress claims.",
        "○ Plea Negotiations: Any plea discussions would be based on this flawed and misleading evidentiary basis.",
        "○ Public Defender Conduct: Even Public Defender Rogazione's alleged misconduct occurred in the context of a case file presumably built around the 'Ed Becker' fallacy.",
        "It begins with Foster providing a false identity, which law enforcement accepts. Whether this was the result of negligence, incompetence, or intention is a question that remains unanswered, however the negative effects on the lives of Vega and others is easily observed by simply following the logic through to the end, and the 'original sin', if you will, leads to all official documentation surrounding this case to be documented using the 'Ed Becker' alias. Subsequently, Foster is (presumably) released under this false identity, and continues his pattern of drug trafficking and associated criminal activity, culminating in at least two vehicular pursuits from police in the weeks following March 15 — incidents that Vega obviously had no involvement with or knowledge of — thereby begging a 'common denominator' query. It is further alleged (albeit, unofficially,) that Foster’s continued liberty enables a later death as a result of his reckless drug distribution.",
        "Beyond Brady",
        "While failure to disclose Foster's true identity is a Brady violation, the active and persistent dissemination of false identifying information throughout discovery is arguably more egregious. It's not just the absence of exculpatory evidence, but the presence of inculpatory-by-omission misinformation. This aligns with arguments for Prosecutorial Misconduct (for shaping a misleading narrative) and Constructive Fraud/Misleading Discovery."
      ],
      points: [
        "Foster recorded only as 'Ed Becker' in every police form.",
        "Concealment of Foster's #1 Most Wanted status.",
        "False narrative infected plea negotiations and defense assessment.",
        "Foster released under false identity, continuing criminal activity.",
        "Constructive Fraud and Misleading Discovery."
      ]
    },
    {
      id: 2,
      title: "The Illusion of Choice",
      subtitle: "Deconstructing Vega’s Perceived Opportunities to Resist or Escape",
      icon: <Lock className="text-teal-400" size={24} />,
      color: "bg-teal-500",
      themeColor: "teal",
      summary: "Mr. Vega's account consistently emphasizes the constant state of coercion under which he operated. He speaks of continuous threats against his life and the lives of his family members, being verbally threatened & physically forced to comply w/the demands of Foster/Allen.",
      documentTitle: "PSYCHOLOGICAL & NEUROLOGICAL ANALYSIS",
      fullContent: [
        "Mr. Vega's account consistently emphasizes the constant state of coercion under which he operated. He speaks of continuous threats against his life and the lives of his family members, being verbally threatened & physically forced to comply w/the demands of Foster/Allen. This atmosphere of terror was not abstract — it was reinforced by concrete actions.",
        "At first, one may suggest/consider arguing that Michael Vega had opportunities during the incident to stop the vehicle, alert authorities, or otherwise resist the commands of Foster and Allen. The reality, however, is that any argument that Mr. Vega could have simply stopped the car or signaled for help ignores the overwhelming/escalating coercion he faced. Furthermore, Mr. Vega's behavior upon surrender—his silence and compliance—was not an admission of guilt or a missed opportunity, but a predictable manifestation of his diagnosed medical PTSD, specifically a 'freeze/appease' trauma response honed over a lifetime of medical powerlessness.",
        "1. Annihilation of 'Reasonable Means of Escape'",
        "● Initial Overpowering: Mr. Vega states he 'immediately attempted to pull over,' but Danielle Allen physically prevented him, seizing the steering wheel and shifter while screaming at him. His choice was overridden by direct physical force from the outset.",
        "● Constant Threats: The vehicle was a pressure cooker of 'terroristic threats' from a known, dangerous fugitive against Mr. Vega and his family. In such a confined space, there is no 'safe' way to alert authorities without inviting immediate, violent retaliation.",
        "● The Lynchpin - 'The Calculated Disablement': Christopher Foster's violent ejection of Mr. Vega's walker was the ultimate nullification of choice. This act psychologically and physically cemented his helplessness, communicating that even if he could get out of the car, he was utterly stranded and at their mercy. Escape was rendered a physical impossibility.",
        "● Responsible Actions Under Duress: His efforts to stop at traffic signals or slow for spike strips were not windows of opportunity. They were the actions of a conscientious person trying to mitigate harm to the public within the coercive environment. To frame these responsible acts as moments he should have risked his life to escape is a perverse distortion of his intent.",
        "2. The PTSD 'Freeze/Appease' Response: Explaining His Silence",
        "The most crucial piece of context for understanding Mr. Vega’s behavior is his diagnosed PTSD, born from decades of profound medical trauma. This is not classic combat PTSD; it is a specific variant born from repeated experiences of helplessness and powerlessness on operating tables and during painful recoveries where he could not fight or flee.",
        "● Learned Helplessness as a Survival Mechanism: Over years of medical interventions, Mr. Vega's nervous system learned that survival is best achieved not through confrontation ('fight'), but through passivity, compliance, and de-escalation ('freeze' or 'appease'). This is a deeply ingrained, instinctual neurological reflex, not a conscious decision.",
        "● Surrender as a Trigger: When confronted by the overwhelming authority and perceived threat of armed police officers, Mr. Vega’s trauma response would have been automatically triggered. In that moment, the 'enemy' is not a specific person, but the overwhelming power dynamic itself, which mirrors the powerlessness he felt in medical settings.",
        "● Predictable Behavior: His decision to be silent, respectful, and compliant upon surrendering is therefore entirely predictable. His brain’s primary objective, as honed by years of trauma, would be to de-escalate the immediate threat and survive the encounter. Challenging the officers by immediately claiming duress would be a confrontational act—a 'shaking things up' that his survival instincts would scream is too dangerous.",
        "● Not a Legal Strategy, but a Survival Reflex: To interpret his silence as guilt or a failure to immediately assert his defense is to fundamentally misunderstand the nature of his psychological condition. He was not a defendant weighing his legal options; he was a trauma survivor employing the only survival strategy his mind and body knew: be still, be quiet, and do not provoke the source of the threat. The instinct is to endure the immediate danger and seek safety and control later, which is precisely what he is doing now.",
        "The violent removal of Mr. Vega's walker serves as the lynchpin in dismantling the 'illusion of choice.' Before its ejection, any theoretical possibility of escape, however dangerous, might be argued. After his sole means of independent ambulation was violently stripped from him, escape became a physical impossibility for Mr. Vega.",
        "Even under the immense pressure of duress, Vega's actions — vigilant of traffic signals, slowing for spike strips, expressing concern for officer safety — demonstrate a consistent character of responsibility and an absence of malice. These are not the actions of a hardened criminal willingly engaging in a reckless flight from justice. They are indicative of an individual terrified and coerced, yet still attempting to prevent further harm to innocent parties.", 
        "This pattern of behavior, corroborated by available footage, makes his claim of duress extremely credible because his actions within the coercive environment are consistent with a non-criminal, conscientious mindset, sharply contrasting with the alleged recklessness and violence of Foster and Allen.",
        "In conclusion, there was no real choice during the incident, and his behavior after the incident was a direct and predictable symptom of the profound trauma that has defined his entire life."
      ],
      points: [
        "Initial Overpowering: Allen seizing the wheel.",
        "Calculated Disablement: Walker ejection cemented helplessness.",
        "PTSD 'Freeze/Appease' Response: Silence was survival, not guilt.",
        "Learned Helplessness as a deeply ingrained reflex.",
        "Surrender triggered automatic trauma response."
      ]
    },
    {
      id: 3,
      title: "The Calculated Disablement",
      subtitle: "Foster's Walker Ejection as Psychological Warfare",
      icon: <Accessibility className="text-rose-400" size={24} />,
      color: "bg-rose-500",
      themeColor: "rose",
      summary: "Christopher Foster's violent ejection of Michael Vega's walker... was not merely an act to prevent escape but a calculated act of psychological warfare. It specifically targeted Vega's primary point of vulnerability and identity...",
      documentTitle: "EVIDENCE LOG: THE WALKER EJECTION",
      fullContent: [
        "Christopher Foster's violent ejection of Michael Vega's walker, preceded by threats, such as, '.. [sic] If I can’t run, then neither will you ..', was not merely an act to prevent escape but a calculated act of psychological warfare. It specifically targeted Vega's primary point of vulnerability and identity as a person with significant mobility impairments, exponentially amplifying the duress and shattering his will to resist beyond what typical threats might achieve.",
        "Supporting Evidence & Analysis:",
        "● Confirmed Act and Intent: The act is not in dispute. All official footage, police statements, and personal accounts confirm that Foster recklessly and violently ejected Vega’s medically-necessary, customized walker from the rear of the vehicle. This is coupled with the direct threat, which removes any ambiguity about Foster's intent: this was a purposeful act to cripple his victim.",
        "● Targeting of a Core Vulnerability: As a triple-amputee, Mr. Vega relies entirely on his walker for all ambulation. It is his connection to the world, the tool that grants him a measure of freedom and independence. Foster, a man described as Ashtabula County’s #1 Most-Wanted, would have immediately recognized this profound dependence. His attack was not random; it was surgically precise, aimed at the very foundation of Mr. Vega's physical identity.",
        "The Annihilation of Agency: A Deeper Psychological Impact",
        "For an individual like Michael Vega, whose entire life has been a relentless battle to preserve his remaining mobility against overwhelming odds, his walker is far more than an assistive device. It is an extension of his personhood, a tangible symbol of his resilience, agency, and refusal to be defined by his limitations. Foster's threat, 'If I can’t run, then neither will you,' followed by the violent disposal of this essential tool, transcends simple intimidation. It constitutes a profound act of identity-based trauma—a symbolic and literal unmanning designed to induce a state of absolute terror and learned helplessness.",
        "This single action communicated a multi-layered message of dominance in the starkest possible terms:",
        "1. 'Your entire life's struggle is meaningless.' It violently dismissed the decades of pain, surgery, and rehabilitation Mr. Vega endured to achieve mobility.",
        "2. 'I control not just this car, but your body.' It shifted the dynamic from coercion to absolute ownership.",
        "3. 'You are no longer a person; you are an object.' By stripping him of his mobility, Foster reduced him to a state of complete dependency, rendering him functionally infantile and entirely at the mercy of his tormentors.",
        "The psychological trauma of such a targeted disablement, especially at the hands of a known and dangerous fugitive, would foreseeably obliterate any remaining perception of resistance or escape. It transforms the duress from a generalized fear of future harm into a specific, visceral, and immediate terror rooted in the stripping away of one's core ability to exist in the world. The 'no reasonable means to escape' element of the duress defense is thus not just physically established, but is psychologically cemented with horrifying and sadistic precision."
      ],
      points: [
        "Confirmed Act and Intent: Purposeful act to cripple.",
        "Targeting of a Core Vulnerability: Surgically precise attack.",
        "Annihilation of Agency: Identity-based trauma.",
        "Message of Dominance: 'I control not just this car, but your body.'",
        "Psychologically cemented 'no reasonable means to escape'."
      ]
    },
    {
      id: 4,
      title: "The Unconscionable Price",
      subtitle: "Vega's Medical Reality vs. The State's Capacity to Incarcerate",
      icon: <Skull className="text-rose-600" size={24} />,
      color: "bg-rose-700",
      themeColor: "rose",
      summary: "Michael Vega's unique, extreme, and complex medical conditions make any form of custodial incarceration or restrictive supervision not just medically inadvisable, but a practical and constitutional impossibility.",
      documentTitle: "MEDICAL BRIEF: EIGHTH AMENDMENT VIOLATION",
      fullContent: [
        "Michael Vega's unique, extreme, and complex medical conditions make any form of custodial incarceration or restrictive supervision not just medically inadvisable, but a practical and constitutional impossibility. The state's inability to safely and humanely manage his health creates a de facto bar to any meaningful punitive sentence, rendering prosecution itself a fundamentally unconscionable act. This is not a plea for leniency; it is a direct challenge to the state's capacity to punish without violating its most fundamental constitutional duties.",
        "1. The Inherent, Life-Threatening Risk of Incarceration",
        "Mr. Vega's medical profile places him in a category of unparalleled fragility. He is a triple amputee whose sole remaining limb contains a failed Phenix prototype endoprosthesis, an obsolete device with a documented 100% failure rate in long-term studies. This isn't just a chronic condition; it is an active orthopedic emergency. He is currently suffering from a posterior dislocation of this hip implant, with the femoral component protruding just beneath the skin. This creates a state of extreme medical precarity where a predictable and fatal cascade of events is not just possible, but imminent in a carceral setting:",
        "● High-Probability of Open Fracture: As a triple amputee, Mr. Vega cannot balance himself or break a fall. The hazardous and unpredictable environment of any correctional facility makes a low-energy fall highly probable. Such a fall would inevitably transmit its full force to his compromised femur, causing a periprosthetic fracture. Given the implant's protrusion, this would be an open fracture—a dire medical emergency where the bone and contaminated implant tear through the skin.",
        "● Inevitable, Catastrophic Infection: An open fracture involving a foreign body like the Phenix implant is the perfect gateway for a fulminant infection. Bacteria would immediately form a biofilm on the implant, creating an intractable implant-associated osteomyelitis (bone infection) that is shielded from the body's immune system and antibiotics.",
        "● Progression to Fatal Sepsis: This localized infection would rapidly become systemic, leading to sepsis and septic shock. For a medically compromised individual in a delayed-response environment, sepsis is a near-certain terminal event.",
        "● Risk of Uncontrollable Hemorrhage: The initial fracture or the subsequent high-risk emergency surgery required to address it could easily damage the femoral artery, leading to massive, fatal blood loss.",
        "The medical literature confirms that the 1-year mortality rate for such fractures in medically complex patients can be as high as 23%, and the 5-year mortality for prosthetic joint infections exceeds 20%—and these are for patients in the civilian healthcare system.",
        "Incarcerating Mr. Vega would constitute a violation of the Eighth Amendment's prohibition on cruel and unusual punishment by showing deliberate indifference to his serious medical needs (Estelle v. Gamble). It would be knowingly placing a man in an environment maximized to trigger his death.",
        "2. The Practical Impossibility of Any Meaningful Sentence",
        "Beyond the direct lethality of imprisonment, Mr. Vega's medical reality makes even non-custodial sentences like probation or community control untenable and unjust.",
        "● The Unpredictable, Multi-Year Medical Odyssey: Mr. Vega has no choice but to seek treatment. This is not an elective procedure; it is a necessity for survival. The required treatment is a multi-stage revision arthroplasty, one of the most complex procedures in orthopedic surgery. This will involve: 1. Multiple preliminary consultations with a handful of world-class specialists who might even attempt such a procedure. 2. An initial, high-risk surgery to remove the failed Phenix implant and all infected/dead tissue. 3. A period of weeks or months with an antibiotic-impregnated spacer, likely rendering him bedbound. 4. A long course of IV antibiotics. 5. A final, massive reconstruction surgery. 6. Months to years of intensive, inpatient and outpatient rehabilitation.",
        "● Geographic and Logistical Barriers: The specialists capable of this surgery are not local. Mr. Vega will be required to travel extensively and potentially relocate for long periods. This medical necessity is fundamentally incompatible with the rigid travel restrictions and reporting requirements of probation or community control. Forcing him to choose between life-saving medical care and compliance with probation would be a violation of basic human dignity and would set him up for inevitable technical violations.",
        "● The Unpredictable Timeline: There is no way to predict the exact timing, duration, or outcome of these medical interventions. Complications are likely. To impose a fixed-term sentence of probation on a man whose entire life for the next several years will be dictated by an unpredictable and all-consuming medical crisis is both illogical and cruel.",
        "An Unconstitutional Proposition",
        "The state is constitutionally and practically incapable of punishing Michael Vega. Imprisonment would be a death sentence. Probation would be a logistical impossibility that pits the justice system against his right to life-saving medical care. The prosecution is therefore pursuing a case where no just, constitutional, or humane punitive outcome is possible. This reality is not merely a mitigating factor for sentencing; it is a profound argument for why the prosecution itself is an unconscionable choice that must be dismissed in the interest of justice."
      ],
      points: [
        "Inherent, Life-Threatening Risk of Incarceration.",
        "High-Probability of Open Fracture and Fatal Sepsis.",
        "Violates Eighth Amendment (Cruel and Unusual Punishment).",
        "Practical Impossibility of Any Meaningful Sentence.",
        "Unconstitutional Proposition: State incapable of punishing without death."
      ]
    },
    {
      id: 5,
      title: "The Scapegoat Gambit",
      subtitle: "Foster and Allen’s Calculated Framing and Eventual Sacrifice of Vega",
      icon: <Target className="text-amber-400" size={24} />,
      color: "bg-amber-500",
      themeColor: "amber",
      summary: "Christopher Foster and Danielle Allen, facing imminent capture for their own serious criminal activities... deliberately manipulated and sacrificed Michael Vega.",
      documentTitle: "STRATEGIC ANALYSIS: ASYMMETRIC WARFARE",
      fullContent: [
        "Christopher Foster and Danielle Allen, facing imminent capture for their own serious criminal activities (including publicized drug trafficking/flight from justice), deliberately manipulated and sacrificed Michael Vega. They exploited his known vulnerabilities, including his physical disability, to create a diversion, facilitate their own escape or secure more lenient treatment, and ultimately leave him as the sole party to face the most severe charges stemming from the incident.",
        "The narrative supporting this gambit begins with Mr. Vega's innocuous intent. He recounts that his sole purpose for being in the vehicle with Christopher Foster was to travel to a Hobby Town store in Mentor, Ohio, where he intended to use a gift card. This gift card, was the 'only item of mine that was in the vehicle' — this detail paints a picture of an individual unwittingly caught in circumstances far removed from his original, innocent intentions.",
        "Comparing and Contrasting",
        "Further inquiry reveals Mr. Vega’s deep dedication to several projects involving artificial intelligence and unmanned aerial systems that were actively being developed by him to 'assist with the lack of rescue services in Lake Erie,' 'autonomously respond to Amber alerts with an eye-in-the-sky,' 'provide real-time measurements of wildfire spread velocity to efficiently allocate EMS manpower,' and 'deploy a solution to track the number of students picked up vs dropped off by schoolbuses' .. these projects, corroborated fully upon inquiry, paint a picture of a man focused on using the mental capacity he did have to contribute to his community in a meaningful way.",
        "Contrast this with the desperation of Christopher Foster, described by Mr. Vega as 'Ashtabula County's #1 Most Wanted' at the time and a known drug trafficker with an extensive criminal history. For Foster, evading capture was paramount. Danielle Allen, identified as Foster's long-term girlfriend, was not a passive passenger but an active participant in the coercion. Mr. Vega alleges she physically prevented him from complying with the police's initial attempt to stop the vehicle, seizing the steering wheel and gear shifter, and issuing threats and orders.",
        "Opportunistic Manipulation of Vega",
        "A crucial element of this gambit is the exploitation of Mr. Vega's disability. The violent ejection of his walker from the vehicle by Foster was not merely an act to prevent Mr. Vega's escape; it strategically ensured he remained a controllable, disabled driver who could plausibly take the fall for the ensuing events. A driver with visible disabilities is arguably less likely to be perceived by authorities as the primary instigator or mastermind of a high-speed police pursuit.",
        "Mr. Vega himself expresses a sense of betrayal and manipulation, stating he 'had no idea that some sort of trick would be played that would result in the two of them being completely left out of the case'. This 'trick' likely encompasses the successful misidentification of Foster as 'Ed Becker' and Allen's suspiciously facilitated departure from the scene. His feeling of having been 'framed and left charged with all of their heinous drug-trafficking crimes' is a direct articulation of this thread.",
        "Deeper investigation into the various aspects of this case reveal instability within Foster and Allen's relationship, their combined fears of being taken into custody to answer for issued warrants/charges pending against them both, and Mr. Vega's convenience as a scapegoat, particularly for drug trafficking or flight charges he did not initiate.",
        "Facing potentially lengthy prison sentences for their activities, sacrificing Mr. Vega—a physically vulnerable individual with no apparent deep connection to their more serious criminal enterprises—would represent a logical, albeit ruthless, strategic move for individuals depicted as career criminals. One must consider the dynamics involved in 'criminal/informant' opportunities (specifically known to be employed by local law enforcement to further the efforts of the local CEAAC, as they could also intertwine with this gambit if, for instance, one was attempting to set up the other, using Mr. Vega as unwitting collateral damage in their dangerous games."
      ],
      points: [
        "Deliberate manipulation and sacrifice of Vega.",
        "Vega's innocuous intent vs. Foster's desperation.",
        "Opportunistic exploitation of Vega's disability.",
        "Vega framed as the scapegoat for Foster/Allen's crimes.",
        "Potential 'criminal/informant' dynamics involved."
      ]
    },
    {
      id: 6,
      title: "The Coordinated Extraction?",
      subtitle: "The Off-Duty Officer, Allen's Disappearance, and Indicators of Pre-Arrangement or LE Complicity",
      icon: <Radio className="text-emerald-400" size={24} />,
      color: "bg-emerald-500",
      themeColor: "emerald",
      summary: "The highly improbable confluence of events surrounding Danielle Allen's flight and rapid collection by an off-duty Ashtabula PD officer... suggests more than mere chance.",
      documentTitle: "INVESTIGATIVE REPORT: THE GHOST EXTRACTION",
      fullContent: [
        "The highly improbable confluence of events surrounding Danielle Allen's flight and rapid collection by an off-duty Ashtabula PD officer, who was out of his jurisdiction and coincidentally present and informed about the pursuit, suggests more than mere chance. Combined with Allen's subsequent unescorted departure from hospital custody without charges, these facts raise serious questions about potential prior law enforcement knowledge of Allen/Foster, possible informant relationships, or even a degree of complicity in facilitating Allen's escape from accountability.",
        "Evidence & Analysis:",
        "● The 'Anomaly' Chain:",
        "○ Off-duty APD officer is parked at the exact Love's gas station where Allen forces Vega to stop.",
        "○ This officer is on an earpiece with an on-duty Geneva PD friend who is giving a play-by-play from police radio and jokes the pursuit 'might pass right by' – which it then does. This implies the off-duty officer was aware of the pursuit's proximity before it was visually apparent.",
        "○ Dash-cam footage shows Allen fleeing and a pickup truck (presumably the off-duty officer's) parked across the street from the location where Allen exits the vehicle.",
        "○ The off-duty officer collects Allen, who is feigning car trouble and attempts flagging down assistance, walking on the side of the road. Having successfully retrieved Allen, he 'stalls' at gas pumps (with Allen in his truck) until uniformed units arrive.",
        "○ Scanner traffic indicates Allen was taken to a hospital (ankle injury or overdose).",
        "○ Allen is ultimately never charged with anything related to Mar 15 incident.",
        "○ Authentic recordings of (public) scanner audio shows approximately ~4 minutes in between the original officer’s broadcast announcing Allen’s fleeing on foot, and radio activity confirming her to be 'safely with … off-duty APD' officer.",
        "● Implausibility of Coincidence: Each element alone might be unusual; collectively, they paint a picture that strains credulity. All analyses of the hitherto known elements of the case end up questioning 'extraordinary coincidence' and the plausibility of LE's prior knowledge.",
        "● Informant Dynamics: The CEAAC Task Force's known practice of recruiting CIs is highly relevant. Was Allen (or Foster, or both) an informant whose handler orchestrated or facilitated her extraction to protect an ongoing operation or her identity? Her not being charged bolsters this.",
        "● Chain of Custody/Credibility: The off-duty officer's proactive involvement with Allen, a fleeing suspect, far from his jurisdiction, immediately raises questions about the integrity of the subsequent investigation and Allen's non-prosecution.",
        "Unanswered Questions & Standstills",
        "Without access to the content of the LE communications or informant files, proving this \"coordinated extraction\" definitively is challenging. The official narrative will likely be one of coincidence and Allen being a minor party or victim herself.", 
        "Overcoming this requires exposing the extreme improbability and leveraging any small inconsistencies in official accounts. The primary standstill is the official \"wall of silence\" that often surrounds informant-related activities or potential misconduct."

      ],
      points: [
        "The 'Anomaly' Chain: Off-duty officer parked exactly where Allen fled.",
        "Officer awareness of pursuit before it was visually apparent.",
        "Implausibility of Coincidence: Suggests prior LE knowledge.",
        "Informant Dynamics: Possible extraction of a CI.",
        "Chain of Custody/Credibility concerns."
      ]
    },
    {
      id: 7,
      title: "The Percival Echo*",
      subtitle: "Vega's Prosecution as a Deflection from Catastrophic Systemic/Law Enforcement Failure",
      icon: <Siren className="text-red-400" size={24} />,
      color: "bg-red-500",
      themeColor: "red",
      summary: "The vigorous prosecution of Michael Vega for the March 15 incident may be, at least in part, an institutional reaction and deflection mechanism to mitigate the severe reputational damage...",
      documentTitle: "VICTIM IMPACT: THE PERCIVAL CAUSATION",
      fullContent: [
        "The vigorous prosecution of Michael Vega for the March 15 incident may be, at least in part, an institutional reaction and deflection mechanism to mitigate the severe reputational damage and potential liability incurred by law enforcement's catastrophic failure: the glaringly incompetent misidentification and release of Christopher Foster on March 15, which directly enabled Foster to cause the overdose death of Stacy Percival on April 20, 2024. Conneaut Police Department’s Chief Michael Colby's subsequent suspension underscores the magnitude of this failure.",
        "● Direct Causation: The ground-truth narrative implies — unfortunately from a standpoint that is speculative due to lack of official statement — that Foster’s mistaken release on the night of 15 March 2024 enabled the 20 April 2024 overdose death of Stacy Percival'.",
        "● Hazy Connections: While official records remain disturbingly unclear, (a sadly recurring theme throughout the entirety of the proceedings surrounding this ordeal), a preliminary look at official records reveals references to felonious assault charges, perhaps with specifications related to drug trafficking.",
        "● High-Level Acknowledgment of Failure: The suspension of Conneaut Police Chief Michael Colby pending outside review due to these failures is a significant admission of systemic problems.",
        "● The Need for a 'Win': After such a devastating outcome (Percival's death) stemming directly from their error with Foster on March 15, law enforcement and prosecutorial agencies would be under immense pressure to:",
        "➢ Demonstrate some measure of control and effectiveness regarding the March 15 incident (while avoiding any compromising questions regarding potential lapses).",
        "➢ Secure a conviction to create a narrative of successful resolution, however tangential — a name is a name, regardless of the actual person who is being convicted.",
        "➢ Shift focus away from their own culpability in Foster's release, even if not for reasons related to the echoes of Percival, multiple car chases attempting to capture Foster become outwards indicators of potential incompetence on behalf of authorities.",
        "● Vega as the Scapegoat: Vega, the medically vulnerable man left at the scene, becomes a convenient target. Prosecuting him, even if the duress claim is strong, allows the system to 'close the book' on March 15 with a conviction, thereby implicitly downplaying the Foster misidentification as less critical than it was.",
        "● Nothing To See Here: The generally-accepted narrative begs to question notions of 'Selective / Disparate Prosecution' where Foster was released, Allen went uncharged, yet Vega faces felony trial.",
        "This theorem suggests that Vega's prosecution isn't happening in a vacuum but is deeply intertwined with subsequent events that exposed massive law enforcement failings. His case might be bearing the weight of those later revelations.",
        "* Due to a lack of official statements/public releases of information, it is important to note for legal reasons the speculative nature of this section."
      ],
      points: [
        "Direct Causation: Foster's release enabled Percival's death.",
        "High-Level Acknowledgment of Failure: Chief Colby's suspension.",
        "The Need for a 'Win': Prosecution of Vega deflects from LE negligence.",
        "Vega as the Scapegoat: Conviction 'closes the book' on March 15.",
        "Argument for Dismissal in the Interest of Justice."
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-4 duration-700">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs md:text-sm text-zinc-500 mb-8 font-medium relative z-20">
          <button onClick={() => setView(ViewState.LANDING)} className="hover:text-teal-400 transition-colors uppercase tracking-wider">Overview</button>
          <ChevronRight size={12} />
          <span className="text-teal-500 uppercase tracking-wider">Legal Threads</span>
        </div>

        <div className="mb-16 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/20 blur-[100px] rounded-full"></div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 font-serif tracking-tight">
            A Tapestry of Tragedy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mx-auto mb-6"></div>
          <p className="relative text-lg text-zinc-300 font-serif max-w-2xl mx-auto leading-relaxed">
            This is not the prosecution of a criminal; it is the persecution of a scapegoat. 
            The following 7 threads reveal the interwoven realities of coercion, systemic failure, and medical impossibility.
          </p>
        </div>

        <div className="space-y-6">
          {threads.map((thread) => {
            const isExpanded = expandedId === thread.id;
            
            return (
              <div 
                key={thread.id} 
                className={`glass-panel rounded-xl border-l-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden ${
                  isExpanded 
                    ? `border-${thread.themeColor}-500 bg-zinc-900/95 shadow-[0_0_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transform scale-[1.02] z-10 my-8` 
                    : `border-zinc-700 hover:border-${thread.themeColor}-500/50 hover:bg-zinc-900/40 hover:translate-x-2 z-0`
                }`}
              >
                <div 
                  onClick={() => toggleThread(thread.id)}
                  className="p-6 cursor-pointer flex items-start gap-4 group"
                >
                  <div className={`p-3 rounded-lg shrink-0 transition-all duration-500 group-hover:scale-110 ${
                    isExpanded 
                      ? `bg-${thread.themeColor}-500/20 text-${thread.themeColor}-500` 
                      : `bg-zinc-800/80 text-zinc-400 group-hover:bg-${thread.themeColor}-500/10 group-hover:text-${thread.themeColor}-400`
                  }`}>
                    {React.cloneElement(thread.icon as React.ReactElement<any>, { 
                      className: isExpanded ? `text-${thread.themeColor}-500` : 'text-current' 
                    })}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                isExpanded ? 'text-white' : 'text-zinc-200'
                            }`}>
                                {thread.title}
                            </h3>
                            <span className="hidden md:block text-zinc-600">•</span>
                            <span className={`text-sm md:text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                                isExpanded ? `text-${thread.themeColor}-500` : 'text-zinc-500'
                            }`}>{thread.subtitle}</span>
                        </div>
                        {/* Rotating Chevron */}
                        <ChevronDown 
                          className={`text-zinc-500 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
                            isExpanded ? 'rotate-180 text-white' : ''
                          }`} 
                        />
                    </div>
                    
                    <div className="relative">
                        {!isExpanded && (
                            <p className="text-zinc-400 font-serif leading-relaxed line-clamp-2 mt-2 animate-in fade-in duration-500">
                                {thread.summary}
                            </p>
                        )}
                    </div>
                  </div>
                </div>

                {/* Grid expansion animation */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-6 pb-8 pl-4 md:pl-[5.5rem] pr-6 md:pr-12 transition-all duration-700 ease-out ${
                      isExpanded 
                        ? 'opacity-100 translate-y-0 delay-200' 
                        : 'opacity-0 -translate-y-8'
                    }`}>
                      
                      {/* Document Container */}
                      <div className="bg-zinc-950/50 rounded-lg p-8 border border-zinc-800 relative overflow-hidden mb-8 shadow-inner">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-zinc-800 border-l border-b border-zinc-700 text-[10px] text-zinc-500 font-mono uppercase rounded-bl-lg flex items-center gap-2">
                           <FileText size={10} /> Official Defense Dossier // Ref: {thread.id}-2024
                        </div>
                        
                        <h4 className="font-bold text-white text-lg border-b border-zinc-700 pb-4 mb-6 tracking-wide font-serif">
                            {thread.documentTitle}
                        </h4>

                        <div className="prose prose-invert max-w-none text-zinc-300 font-serif leading-relaxed space-y-6">
                            {thread.fullContent.map((paragraph, idx) => {
                                // Simple heuristic to style headers within the text content based on the PDF structure (e.g., bullets or bold intros)
                                const isHeader = /^[A-Z0-9].+(:| - | \?)/.test(paragraph) || paragraph.length < 50 && !paragraph.endsWith('.'); 
                                return (
                                    <p key={idx} className={`${isHeader ? `font-bold text-${thread.themeColor}-400 mt-8 mb-2 tracking-wide uppercase text-sm font-sans` : 'text-lg text-zinc-300'}`}>
                                        {paragraph}
                                    </p>
                                )
                            })}
                        </div>
                      </div>

                      <div className="bg-black/30 rounded-lg p-6 border border-white/5 backdrop-blur-sm">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Key Evidence Points</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {thread.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 bg-white/5 p-3 rounded-md border border-white/5 hover:bg-white/10 transition-colors">
                              <AlertOctagon size={16} className={`mt-0.5 shrink-0 text-${thread.themeColor}-500`} />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreadsSection;
import { Injectable } from '@angular/core';

export interface MedicalService {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  features: string[];
  availability: string;
  price: string;
  duration: string;
  serviceArea: string;
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  private services: MedicalService[] = [
    {
      id: 1,
      title: 'First Aid Wound and Dressing',
      description: 'Basic first aid, wound care, and sterile dressing services at home.',
      detailedDescription:
        'Our First Aid and Wound Dressing service provides expert care for minor injuries, cuts, abrasions, and surgical wound dressing in the comfort of your home. Our trained professionals ensure safe, sterile, and timely care to promote faster healing and prevent infections.',
      icon: 'pi pi-user-edit',
      features: [
        'Sterile Wound Dressing',
        'Minor Injury Care',
        'Burn Dressing',
        'Post-Surgical Wound Management',
        'Infection Prevention',
        'Regular Dressing Changes',
        'Bleeding Control',
        'Pain Management',
      ],
      availability: 'Same Day Service',
      price: 'Starting from ₹700/visit',
      duration: '20-45 minutes',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Injury Assessment',
          description: 'Evaluate the type and severity of the wound',
        },
        {
          title: 'Cleaning and Preparation',
          description: 'Sterile cleaning of the wound and surrounding area',
        },
        {
          title: 'Dressing Application',
          description: 'Application of appropriate dressing or bandage',
        },
        {
          title: 'Aftercare Advice',
          description: 'Guidance on wound care and healing monitoring',
        },
      ],
      faqs: [
        {
          question: 'What types of wounds do you treat at home?',
          answer: 'We handle minor cuts, abrasions, burns, post-operative wounds, and dressings for chronic wounds like diabetic ulcers.',
        },
        {
          question: 'Do I need a doctor’s prescription for this service?',
          answer: 'Not necessarily for basic wounds, but for complex dressings (post-surgical, diabetic), a prescription or report helps.',
        },
        {
          question: 'Can the nurse handle infected wounds?',
          answer: 'Yes, trained nurses can handle infected wounds and escalate to doctors if complications arise.',
        },
      ],
    },
    {
      id: 2,
      title: 'ICU at Home',
      description: 'Critical care services with advanced monitoring and life support systems in your home.',
      detailedDescription:
        'Our ICU at Home service brings hospital-level critical care to your doorstep. We provide comprehensive intensive care with advanced monitoring equipment, ventilator support, and round-the-clock medical supervision by certified critical care specialists.',
      icon: 'pi pi-heart',
      features: [
        '24/7 Critical Care Monitoring',
        'Advanced Life Support Equipment',
        'Ventilator Support Available',
        'Trachesotomy Care',
        'Certified ICU Specialists',
        'Emergency Response Team',
        'Real-time Health Monitoring',
        'Family Support and Counseling',
        'Medication Management',
      ],
      availability: '24/7 Available',
      price: 'Starting from ₹8,000/day',
      duration: 'Continuous care as needed',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Initial Assessment',
          description: 'Medical team evaluates patient condition and requirements',
        },
        {
          title: 'Equipment Setup',
          description: 'Installation of ICU equipment and monitoring systems',
        },
        {
          title: 'Care Implementation',
          description: '24/7 monitoring and medical care by specialists',
        },
        {
          title: 'Regular Monitoring',
          description: 'Continuous health monitoring and treatment adjustments',
        },
      ],
      faqs: [
        {
          question: 'What equipment is provided for ICU at home?',
          answer:
            'We provide ventilators, cardiac monitors, infusion pumps, oxygen concentrators, and all necessary medical equipment for critical care.',
        },
        {
          question: 'Are the medical staff available 24/7?',
          answer: 'Yes, our certified ICU specialists and nurses are available round the clock for continuous patient monitoring and care.',
        },
        {
          question: 'How quickly can ICU services be set up?',
          answer: 'Emergency ICU setup can be completed within 2-4 hours, depending on location and equipment requirements.',
        },
      ],
    },
    {
      id: 3,
      title: 'Specialized Nurse at Home',
      description: 'Certified nurses providing professional medical care and monitoring.',
      detailedDescription:
        'Our specialized nursing services provide professional medical care in the comfort of your home. Our certified nurses are trained in various specialties including wound care, post-operative care, chronic disease management, and elderly care.',
      icon: 'pi pi-user-plus',
      features: [
        'Certified Professional Nurses',
        'Wound Care and Dressing',
        'Medication Administration',
        'Colostomy Care',
        'Post-Surgery Care',
        'Chronic Disease Management',
        'Health Monitoring',
        'Patient Education',
        'Ryles Tub Feed and PG Fedd',
        'Folys Catheter Insertion and Care',
      ],
      availability: 'On Demand',
      price: 'Starting from ₹2,500/visit',
      duration: '2-8 hours per visit',
      serviceArea: 'Citywide coverage',
      process: [
        {
          title: 'Consultation',
          description: 'Initial assessment of patient needs and care requirements',
        },
        {
          title: 'Care Planning',
          description: 'Development of personalized nursing care plan',
        },
        {
          title: 'Service Delivery',
          description: 'Professional nursing care at scheduled times',
        },
        {
          title: 'Progress Monitoring',
          description: 'Regular evaluation and care plan adjustments',
        },
      ],
      faqs: [
        {
          question: 'What qualifications do your nurses have?',
          answer:
            'All our nurses are certified professionals with relevant specializations and years of experience in hospital and home care settings.',
        },
        {
          question: 'Can nurses provide medication administration?',
          answer:
            'Yes, our nurses are qualified to administer medications as prescribed by doctors and provide medication management services.',
        },
        {
          question: 'How often can nursing visits be scheduled?',
          answer: 'Nursing visits can be scheduled daily, weekly, or as needed based on patient requirements and doctor recommendations.',
        },
      ],
    },
    {
      id: 4,
      title: 'Trained Attendant at Home',
      description: 'Skilled caregivers for daily assistance and basic medical support.',
      detailedDescription:
        'Our trained attendants provide compassionate care and assistance with daily activities. They are skilled in basic medical support, personal care, mobility assistance, and companionship for patients who need ongoing support.',
      icon: 'pi pi-users',
      features: [
        'Personal Care Assistance',
        'Mobility Support',
        'Medication Reminders',
        'Companionship',
        'Basic Medical Support',
        'Meal Assistance',
        'Hygiene Care',
        'Safety Monitoring',
      ],
      availability: 'Flexible Hours',
      price: 'Starting from ₹1,500/day',
      duration: '8-24 hours per day',
      serviceArea: 'All service areas',
      process: [
        {
          title: 'Assessment',
          description: 'Evaluation of patient care needs and preferences',
        },
        {
          title: 'Attendant Matching',
          description: 'Selection of suitable trained attendant',
        },
        {
          title: 'Care Initiation',
          description: 'Beginning of personalized care services',
        },
        {
          title: 'Ongoing Support',
          description: 'Continuous care with regular supervision',
        },
      ],
      faqs: [
        {
          question: 'What training do attendants receive?',
          answer:
            'Our attendants receive comprehensive training in patient care, basic medical support, emergency response, and communication skills.',
        },
        {
          question: 'Can attendants work overnight?',
          answer: 'Yes, we provide 24-hour attendant services including overnight care for patients who require continuous assistance.',
        },
        {
          question: 'Are attendants supervised?',
          answer: 'Yes, all attendants work under the supervision of our nursing team and receive regular training updates.',
        },
      ],
    },
    {
      id: 5,
      title: 'Mother and Child Care',
      description: 'Comprehensive maternal and pediatric care services.',
      detailedDescription:
        'Our mother and child care services provide comprehensive support during pregnancy, childbirth, and early childhood. We offer prenatal care, postnatal support, newborn care, and pediatric services with specialized medical professionals.',
      icon: 'pi pi-heart-fill',
      features: [
        'Prenatal Care and Monitoring',
        'Postnatal Support',
        'Newborn Care',
        'Lactation Counseling',
        'Pediatric Consultations',
        'Vaccination Services',
        'Growth Monitoring',
        'Parenting Support',
      ],
      availability: '24/7 Support',
      price: 'Starting from ₹3,000/visit',
      duration: 'Varies by service',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Initial Consultation',
          description: 'Assessment of maternal and child health needs',
        },
        {
          title: 'Care Planning',
          description: 'Development of personalized care plan',
        },
        {
          title: 'Service Delivery',
          description: 'Professional maternal and pediatric care',
        },
        {
          title: 'Follow-up Care',
          description: 'Ongoing monitoring and support',
        },
      ],
      faqs: [
        {
          question: 'Do you provide delivery services at home?',
          answer:
            'We provide postnatal care and support. For deliveries, we recommend hospital settings for safety, but provide comprehensive pre and post-delivery care.',
        },
        {
          question: 'What pediatric services are available?',
          answer: 'We offer pediatric consultations, vaccinations, growth monitoring, and treatment of common childhood illnesses.',
        },
        {
          question: 'Is lactation counseling included?',
          answer: 'Yes, our certified lactation consultants provide breastfeeding support and guidance for new mothers.',
        },
      ],
    },
    {
      id: 6,
      title: 'Senior Care Subscription',
      description: 'Comprehensive healthcare plans tailored for elderly patients.',
      detailedDescription:
        'Our senior care subscription provides comprehensive healthcare management for elderly patients. This includes regular health monitoring, medication management, preventive care, and emergency support tailored to the unique needs of senior citizens.',
      icon: 'pi pi-shield',
      features: [
        'Regular Health Check-ups',
        'Medication Management',
        'Chronic Disease Monitoring',
        'Emergency Support',
        'Preventive Care',
        'Health Screening',
        'Nutrition Counseling',
        'Mental Health Support',
      ],
      availability: 'Monthly Plans',
      price: 'Starting from ₹5,000/month',
      duration: 'Ongoing subscription',
      serviceArea: 'All service areas',
      process: [
        {
          title: 'Health Assessment',
          description: 'Comprehensive evaluation of health status',
        },
        {
          title: 'Plan Customization',
          description: 'Tailored care plan based on individual needs',
        },
        {
          title: 'Regular Monitoring',
          description: 'Scheduled check-ups and health monitoring',
        },
        {
          title: 'Ongoing Support',
          description: 'Continuous care and plan adjustments',
        },
      ],
      faqs: [
        {
          question: 'What is included in the monthly subscription?',
          answer:
            'The subscription includes regular health check-ups, medication management, emergency support, and access to our medical team.',
        },
        {
          question: 'Can family members access health updates?',
          answer: 'Yes, with patient consent, family members can receive regular health updates and reports.',
        },
        {
          question: 'Is emergency care included?',
          answer: 'Yes, 24/7 emergency support is included in all senior care subscription plans.',
        },
      ],
    },
    {
      id: 7,
      title: 'Travel Nurses',
      description: 'Mobile nursing services for patients who need care while traveling.',
      detailedDescription:
        'Our travel nursing services provide medical care and support for patients who need healthcare assistance while traveling or temporarily staying away from home. Our mobile nurses can provide care at hotels, temporary residences, or any location.',
      icon: 'pi pi-car',
      features: [
        'Mobile Medical Care',
        'Travel Health Support',
        'Emergency Response',
        'Medication Management',
        'Health Monitoring',
        'Medical Equipment Transport',
        'Coordination with Local Healthcare',
        'Travel Health Documentation',
      ],
      availability: 'On Request',
      price: 'Starting from ₹4,000/visit',
      duration: 'As needed',
      serviceArea: 'Regional coverage',
      process: [
        {
          title: 'Travel Planning',
          description: 'Assessment of medical needs during travel',
        },
        {
          title: 'Nurse Assignment',
          description: 'Assignment of qualified travel nurse',
        },
        {
          title: 'Mobile Care',
          description: 'Medical care at travel location',
        },
        {
          title: 'Coordination',
          description: 'Coordination with local healthcare if needed',
        },
      ],
      faqs: [
        {
          question: 'How far can travel nurses go?',
          answer:
            'Our travel nurses can provide services within a 200km radius of major cities, with special arrangements for longer distances.',
        },
        {
          question: 'What equipment can travel nurses carry?',
          answer: 'Travel nurses carry portable medical equipment including monitors, basic diagnostic tools, and emergency medications.',
        },
        {
          question: 'Can travel nurses coordinate with local hospitals?',
          answer: 'Yes, our travel nurses can coordinate with local healthcare facilities if additional medical care is needed.',
        },
      ],
    },
    {
      id: 8,
      title: 'Specialty Rehab Centers',
      description: 'Professional rehabilitation services for recovery and therapy.',
      detailedDescription:
        'Our specialty rehabilitation services provide comprehensive recovery programs for patients recovering from surgery, injury, or illness. We offer physical therapy, occupational therapy, speech therapy, and specialized rehabilitation programs.',
      icon: 'pi pi-refresh',
      features: [
        'Physical Therapy',
        'Occupational Therapy',
        'Speech Therapy',
        'Cardiac Rehabilitation',
        'Neurological Rehabilitation',
        'Post-Surgery Recovery',
        'Pain Management',
        'Mobility Training',
      ],
      availability: 'Scheduled',
      price: 'Starting from ₹2,000/session',
      duration: '45-90 minutes per session',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Assessment',
          description: 'Comprehensive evaluation of rehabilitation needs',
        },
        {
          title: 'Program Design',
          description: 'Customized rehabilitation program development',
        },
        {
          title: 'Therapy Sessions',
          description: 'Regular therapy sessions with specialists',
        },
        {
          title: 'Progress Evaluation',
          description: 'Regular assessment and program adjustments',
        },
      ],
      faqs: [
        {
          question: 'What types of rehabilitation are available?',
          answer:
            'We offer physical therapy, occupational therapy, speech therapy, and specialized programs for cardiac and neurological rehabilitation.',
        },
        {
          question: 'How long does rehabilitation typically take?',
          answer: 'Rehabilitation duration varies based on condition and goals, typically ranging from 4-12 weeks with regular sessions.',
        },
        {
          question: 'Are therapists certified?',
          answer: 'Yes, all our therapists are certified professionals with specialized training in their respective fields.',
        },
      ],
    },
    {
      id: 9,
      title: 'Doctor Consultation at Home',
      description: 'Professional medical consultation and examination in your home.',
      detailedDescription:
        'Our home consultation services bring qualified doctors to your doorstep for comprehensive medical examinations, diagnosis, and treatment. We offer general practice consultations as well as specialist consultations in various medical fields.',
      icon: 'pi pi-user-edit',
      features: [
        'General Practice Consultations',
        'Specialist Consultations',
        'Medical Examinations',
        'Prescription Services',
        'Health Assessments',
        'Follow-up Care',
        'Medical Certificates',
        'Referral Services',
      ],
      availability: 'Appointment Based',
      price: 'Starting from ₹1,500/consultation',
      duration: '30-60 minutes',
      serviceArea: 'Citywide coverage',
      process: [
        {
          title: 'Appointment Booking',
          description: 'Schedule consultation with preferred doctor',
        },
        {
          title: 'Home Visit',
          description: 'Doctor visits patient at home',
        },
        {
          title: 'Examination',
          description: 'Comprehensive medical examination',
        },
        {
          title: 'Treatment Plan',
          description: 'Diagnosis and treatment recommendations',
        },
      ],
      faqs: [
        {
          question: 'What specialists are available for home visits?',
          answer: 'We have specialists in cardiology, neurology, orthopedics, pediatrics, gynecology, and other major medical fields.',
        },
        {
          question: 'Can prescriptions be provided during home visits?',
          answer: 'Yes, doctors can provide prescriptions and medical certificates during home consultations.',
        },
        {
          question: 'How quickly can a doctor visit be arranged?',
          answer: 'Same-day appointments are available for urgent cases, with regular appointments scheduled within 24-48 hours.',
        },
      ],
    },
    {
      id: 10,
      title: 'Physiotherapy at Home',
      description: 'Professional physiotherapy and rehabilitation services.',
      detailedDescription:
        'Our home physiotherapy services provide professional physical therapy treatment in the comfort of your home. Our certified physiotherapists offer treatment for various conditions including post-surgery recovery, sports injuries, and chronic pain management.',
      icon: 'pi pi-cog',
      features: [
        'Certified Physiotherapists',
        'Movement Therapy',
        'Pain Management',
        'Exercise Programs',
        'Mobility Training',
        'Sports Injury Treatment',
        'Post-Surgery Rehabilitation',
        'Chronic Pain Relief',
      ],
      availability: 'Flexible Timing',
      price: 'Starting from ₹1,200/session',
      duration: '45-60 minutes per session',
      serviceArea: 'All service areas',
      process: [
        {
          title: 'Initial Assessment',
          description: 'Comprehensive evaluation of physical condition',
        },
        {
          title: 'Treatment Planning',
          description: 'Customized physiotherapy treatment plan',
        },
        {
          title: 'Therapy Sessions',
          description: 'Regular physiotherapy sessions at home',
        },
        {
          title: 'Progress Monitoring',
          description: 'Regular evaluation and plan adjustments',
        },
      ],
      faqs: [
        {
          question: 'What conditions can physiotherapy treat?',
          answer:
            'Physiotherapy can treat back pain, joint problems, sports injuries, post-surgery recovery, arthritis, and many other musculoskeletal conditions.',
        },
        {
          question: 'Do physiotherapists bring equipment?',
          answer: 'Yes, our physiotherapists bring necessary equipment and can recommend home exercise equipment if needed.',
        },
        {
          question: 'How many sessions are typically needed?',
          answer: 'The number of sessions varies based on condition and goals, typically ranging from 6-20 sessions over several weeks.',
        },
      ],
    },
    {
      id: 11,
      title: 'Medical Procedures at Home',
      description: 'Minor medical procedures performed safely in your home.',
      detailedDescription:
        'Our home medical procedures service provides safe and sterile minor medical procedures in your home environment. Our qualified medical professionals can perform various procedures with proper equipment and safety protocols.',
      icon: 'pi pi-wrench',
      features: [
        'Sterile Procedure Environment',
        'Wound Care and Suturing',
        'Injection Services',
        'IV Therapy',
        'Sample Collection',
        'Catheter Care',
        'Dressing Changes',
        'Minor Surgical Procedures',
      ],
      availability: 'As Needed',
      price: 'Starting from ₹800/procedure',
      duration: '30-90 minutes',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Procedure Assessment',
          description: 'Evaluation of procedure requirements and safety',
        },
        {
          title: 'Preparation',
          description: 'Setup of sterile environment and equipment',
        },
        {
          title: 'Procedure',
          description: 'Safe performance of medical procedure',
        },
        {
          title: 'Post-Care',
          description: 'Post-procedure care and instructions',
        },
      ],
      faqs: [
        {
          question: 'What types of procedures can be done at home?',
          answer:
            "We can perform wound care, injections, IV therapy, sample collection, and other minor procedures that don't require hospital facilities.",
        },
        {
          question: 'Are home procedures safe?',
          answer:
            'Yes, we follow strict safety and sterility protocols to ensure all procedures are performed safely in the home environment.',
        },
        {
          question: 'What if complications arise during a procedure?',
          answer:
            'Our medical professionals are trained to handle complications and have emergency protocols in place, including hospital transfer if needed.',
        },
      ],
    },
    {
      id: 12,
      title: 'Adult Vaccination at Home',
      description: 'Complete vaccination services for adults in the comfort of home.',
      detailedDescription:
        'Our home vaccination services provide convenient and safe immunization for adults. We offer a complete range of vaccines including routine immunizations, travel vaccines, and seasonal vaccines with proper cold chain maintenance.',
      icon: 'pi pi-plus-circle',
      features: [
        'Routine Adult Vaccines',
        'Travel Vaccinations',
        'Seasonal Flu Vaccines',
        'COVID-19 Vaccination',
        'Hepatitis Vaccines',
        'Tetanus Boosters',
        'Vaccination Records',
        'Pre-vaccination Consultation',
      ],
      availability: 'Scheduled',
      price: 'Starting from ₹500/vaccine',
      duration: '15-30 minutes',
      serviceArea: 'Citywide coverage',
      process: [
        {
          title: 'Consultation',
          description: 'Assessment of vaccination needs and medical history',
        },
        {
          title: 'Vaccine Preparation',
          description: 'Proper vaccine storage and preparation',
        },
        {
          title: 'Administration',
          description: 'Safe vaccine administration at home',
        },
        {
          title: 'Monitoring',
          description: 'Post-vaccination monitoring and documentation',
        },
      ],
      faqs: [
        {
          question: 'Which vaccines are available for home administration?',
          answer:
            'We provide most adult vaccines including flu, COVID-19, hepatitis, tetanus, and travel vaccines. Some specialized vaccines may require clinic visits.',
        },
        {
          question: 'How is vaccine quality maintained during transport?',
          answer: 'We use proper cold chain equipment to maintain vaccine quality and effectiveness during transport to your home.',
        },
        {
          question: 'Can vaccination records be provided?',
          answer: 'Yes, we provide official vaccination certificates and maintain digital records for all administered vaccines.',
        },
      ],
    },
    {
      id: 13,
      title: 'Diagnostics at Home',
      description: 'Comprehensive diagnostic services and lab tests at your doorstep.',
      detailedDescription:
        'Our home diagnostic services bring laboratory testing and diagnostic procedures to your home. We offer a wide range of tests including blood work, imaging, and specialized diagnostic procedures with accurate and timely results.',
      icon: 'pi pi-search',
      features: [
        'Blood Tests and Lab Work',
        'ECG/EKG Testing',
        'Portable X-rays',
        'Ultrasound Services',
        'Health Screening Packages',
        'Rapid Test Results',
        'Sample Collection',
        'Digital Reports',
      ],
      availability: 'Quick Results',
      price: 'Starting from ₹300/test',
      duration: '15-45 minutes',
      serviceArea: 'All service areas',
      process: [
        {
          title: 'Test Booking',
          description: 'Schedule diagnostic tests and procedures',
        },
        {
          title: 'Sample Collection',
          description: 'Professional sample collection at home',
        },
        {
          title: 'Laboratory Processing',
          description: 'Processing of samples in certified labs',
        },
        {
          title: 'Result Delivery',
          description: 'Digital delivery of test results',
        },
      ],
      faqs: [
        {
          question: 'What types of tests can be done at home?',
          answer: 'We offer blood tests, urine tests, ECG, portable X-rays, ultrasound, and many other diagnostic procedures at home.',
        },
        {
          question: 'How quickly are results available?',
          answer: 'Most routine test results are available within 24-48 hours, with some rapid tests providing results within hours.',
        },
        {
          question: 'Are home diagnostic results as accurate as hospital tests?',
          answer: 'Yes, we use the same quality standards and certified laboratories as hospitals to ensure accurate and reliable results.',
        },
      ],
    },
    {
      id: 14,
      title: 'Prescribed Medicine Delivery',
      description: 'Prescribed medication delivery with consultation and guidance.',
      detailedDescription:
        'Our medicine delivery service provides convenient and safe delivery of prescribed medications to your home. We offer medication counseling, dosage guidance, and ensure proper storage and handling of all medications.',
      icon: 'pi pi-shopping-bag',
      features: [
        'Prescription Verification',
        'Medication Counseling',
        'Dosage Guidance',
        'Drug Interaction Checks',
        'Refill Reminders',
        'Cold Chain Medications',
        'Emergency Medicine Delivery',
        'Medication Management',
      ],
      availability: 'Same Day',
      price: 'Medicine cost + ₹100 delivery',
      duration: '2-4 hours delivery',
      serviceArea: 'All service areas',
      process: [
        {
          title: 'Prescription Upload',
          description: 'Upload or share prescription details',
        },
        {
          title: 'Verification',
          description: 'Pharmacist verification of prescription',
        },
        {
          title: 'Preparation',
          description: 'Medication preparation and packaging',
        },
        {
          title: 'Delivery',
          description: 'Safe delivery with counseling',
        },
      ],
      faqs: [
        {
          question: 'How quickly can medicines be delivered?',
          answer: 'Most medications can be delivered within 2-4 hours. Emergency medications can be delivered within 1 hour.',
        },
        {
          question: 'Do you provide medication counseling?',
          answer: 'Yes, our pharmacists provide detailed medication counseling including dosage, timing, and potential side effects.',
        },
        {
          question: 'Can you handle controlled substances?',
          answer: 'Yes, we can deliver controlled substances with proper verification and documentation as per regulations.',
        },
      ],
    },
    {
      id: 15,
      title: 'Medical Equipment Sale/Rent',
      description: 'Sale and rental of medical equipment with installation support.',
      detailedDescription:
        'Our medical equipment service provides sale and rental of various medical devices and equipment for home use. We offer installation, training, maintenance, and technical support for all equipment.',
      icon: 'pi pi-desktop',
      features: [
        'Wide Range of Equipment',
        'Sale and Rental Options',
        'Installation Service',
        'Training and Support',
        'Maintenance Service',
        'Technical Support',
        'Equipment Upgrades',
        'Insurance Assistance',
      ],
      availability: 'Quick Delivery',
      price: 'Varies by equipment',
      duration: 'Flexible rental terms',
      serviceArea: 'All metropolitan areas',
      process: [
        {
          title: 'Consultation',
          description: 'Assessment of equipment needs',
        },
        {
          title: 'Selection',
          description: 'Equipment selection and pricing',
        },
        {
          title: 'Delivery & Setup',
          description: 'Equipment delivery and installation',
        },
        {
          title: 'Training & Support',
          description: 'User training and ongoing support',
        },
      ],
      faqs: [
        {
          question: 'What types of medical equipment are available?',
          answer: 'We offer wheelchairs, hospital beds, oxygen concentrators, CPAP machines, monitors, and many other medical devices.',
        },
        {
          question: 'Is training provided for equipment use?',
          answer: 'Yes, we provide comprehensive training for all equipment and ongoing technical support.',
        },
        {
          question: 'What if equipment needs repair?',
          answer: 'We provide maintenance and repair services, with replacement equipment available during repair periods.',
        },
      ],
    },
  ];

  getAllServices(): MedicalService[] {
    return this.services;
  }

  getServiceById(data: string): MedicalService | undefined {
    return this.services.find(service => service.title === data);
  }

  getServicesByCategory(category: string): MedicalService[] {
    // This could be expanded to filter by categories
    return this.services;
  }
  getAll() {
    return [
      {
        id: 1,
        name: 'Pulse Oximeter',
        description: 'Measures oxygen saturation in blood.',
        price: 1200,
        imageUrl: 'assets/images/pulse-oximeter.jpg',
        isBestSeller: true,
        category: 'Monitoring',
      },
      {
        id: 2,
        name: 'BestFit2 Full Face Mask (Medium)',
        description: 'Full face mask with secure seal.',
        price: 3500,
        imageUrl: 'assets/images/bestfit2-mask.jpg',
        category: 'Masks',
      },
      {
        id: 3,
        name: 'AirFit N20 Nasal Mask',
        description: 'Nasal mask with silicone cushion.',
        price: 5130,
        imageUrl: 'assets/images/airfit-n20.webp',
        category: 'Masks',
      },
      {
        id: 4,
        name: 'Wheelchair Foldable',
        description: 'Durable wheelchair with foldable frame.',
        price: 5400,
        imageUrl: 'assets/images/wheelchair.jpg',
        category: 'Wheel Chair',
      },
      {
        id: 5,
        name: 'Digital Thermometer',
        description: 'Accurate temperature readings in seconds.',
        price: 350,
        imageUrl: 'assets/images/digital-thermometer.webp',
        category: 'Monitoring',
      },
      {
        id: 6,
        name: 'Nebulizer Machine',
        description: 'Delivers medication to lungs effectively.',
        price: 2800,
        imageUrl: 'assets/images/nebulizer.jpg',
        isBestSeller: true,
        category: 'Respiratory',
      },
      {
        id: 7,
        name: 'Blood Pressure Monitor',
        description: 'Automatic upper arm blood pressure checker.',
        price: 2200,
        imageUrl: 'assets/images/bp-monitor.jpg',
        category: 'Monitoring',
      },
      {
        id: 8,
        name: 'CPAP Machine',
        description: 'Continuous Positive Airway Pressure device.',
        price: 23500,
        imageUrl: 'assets/images/cpap-machine.png',
        category: 'Respiratory',
      },
      {
        id: 9,
        name: 'Infrared Thermometer',
        description: 'Contactless thermometer with instant results.',
        price: 1450,
        imageUrl: 'assets/images/infrared-thermometer.jpg',
        category: 'Monitoring',
      },
      {
        id: 10,
        name: 'Walker with Wheels',
        description: 'Foldable walker for elderly mobility.',
        price: 2900,
        imageUrl: 'assets/images/walker.jpg',
        category: 'Mobility',
      },
      {
        id: 11,
        name: 'Portable Suction Machine',
        description: 'Removes mucus and secretions safely.',
        price: 7500,
        imageUrl: 'assets/images/suction-machine.png',
        category: 'Respiratory',
      },
      {
        id: 12,
        name: 'Commode Chair',
        description: 'Foldable commode for home use.',
        price: 2200,
        imageUrl: 'assets/images/commode-chair.jpg',
        category: 'Mobility',
      },
      {
        id: 13,
        name: 'Surgical Gloves (100 pcs)',
        description: 'Latex disposable gloves, medium size.',
        price: 550,
        imageUrl: 'assets/images/surgical-gloves.png',
        category: 'Hygiene',
      },

      {
        id: 15,
        name: 'IV Stand Adjustable',
        description: 'Stainless steel IV pole with wheels.',
        price: 1500,
        imageUrl: 'assets/images/iv-stand.jpg',
        category: 'Support',
      },
      {
        id: 16,
        name: 'Air Mattress Anti Bedsore',
        description: 'Prevents pressure ulcers in bed-ridden patients.',
        price: 3500,
        imageUrl: 'assets/images/air-mattress.jpg',
        category: 'Support',
      },

      {
        id: 18,
        name: 'Folding Stretcher',
        description: 'Lightweight emergency rescue stretcher.',
        price: 4500,
        imageUrl: 'assets/images/folding-stretcher.jpg',
        category: 'Emergency',
      },
      {
        id: 19,
        name: 'Steam Inhaler',
        description: 'For sinus relief and respiratory care.',
        price: 850,
        imageUrl: 'assets/images/steam-inhaler.jpg',
        category: 'Respiratory',
      },
      {
        id: 20,
        name: 'Oxygen Concentrator (5L)',
        description: 'Delivers concentrated oxygen for patients.',
        price: 39500,
        imageUrl: 'assets/images/oxygen-concentrator.jpg',
        category: 'Respiratory',
      },
      {
        id: 21,
        name: 'Hospital Bed (Manual)',
        description: 'Adjustable back and leg support.',
        price: 18500,
        imageUrl: 'assets/images/hospital-bed.webp',
        category: 'Furniture',
      },
      {
        id: 22,
        name: 'Defibrillator AED',
        description: 'Automated External Defibrillator for emergencies.',
        price: 92000,
        imageUrl: 'assets/images/aed.jpg',
        category: 'Emergency',
      },
      {
        id: 23,
        name: 'Nimbus Mattress System',
        description: 'Advanced pressure-relieving bed mattress.',
        price: 12500,
        imageUrl: 'assets/images/nimbus-bed.jpg',
        category: 'Nimbus Bed',
      },
      {
        id: 24,
        name: 'BiPAP Machine',
        description: 'Bi-level Positive Airway Pressure device for sleep apnea.',
        price: 28000,
        imageUrl: 'assets/images/bipap-machine.jpg',
        category: 'BiPAP/CPAP',
      },
      {
        id: 25,
        name: 'DVT Pump System',
        description: 'Device for Deep Vein Thrombosis prevention.',
        price: 15500,
        imageUrl: 'assets/images/dvt-pump.jpg',
        category: 'DVT Pump',
      },
      {
        id: 26,
        name: 'Infusion Pump',
        description: 'Precisely delivers fluids, medication, or nutrients.',
        price: 34000,
        imageUrl: 'assets/images/infusion-pump.jpg',
        category: 'Pumps',
      },
      {
        id: 28,
        name: 'CPAP Mask Accessory Kit',
        description: 'Includes mask parts and cleaning supplies.',
        price: 1800,
        imageUrl: 'assets/images/accessories.jpg',
        category: 'Accessories',
      },
    ];
  }
}

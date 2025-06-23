// تحديث رابط Google Apps Script إلى الرابط الجديد
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwo57SDp1tq_kJnA7muLf1VrQarAI4uZlHThYOrD-xQnFga08Y0UojLrSPeTknJqHTX/exec"

// Mobile Navigation Toggle
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.getElementById("nav-menu")

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Google Sheets Integration Configuration - الرابط الجديد المحدث
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHX17zL_QHmtLyHj_uB-LQoJTaelS2WUxuQ5Cp8MZ7GpJRjgv9b7l2CBcyBGl6sHQ_/exec"

// Course Details Data
const courseDetails = {
  A1: {
    title: "المستوى الأول - A1 (مبتدئ)",
    level: "مبتدئ",
    duration: "3 أشهر",
    description:
      "هذا المستوى مخصص للمبتدئين الذين لا يملكون أي خبرة سابقة في اللغة الألمانية. ستتعلم الأساسيات الضرورية للتواصل في المواقف اليومية البسيطة.",
    curriculum: [
      "الأبجدية الألمانية والنطق الصحيح",
      "الأرقام والألوان والأيام والشهور",
      "التحيات والتعارف",
      "الأسرة والمهن",
      "الطعام والشراب",
      "التسوق والأسعار",
      "الوقت والمواعيد",
      "الاتجاهات والمواصلات",
    ],
    requirements: ["لا توجد متطلبات سابقة", "الرغبة في التعلم والممارسة", "حضور منتظم للحصص", "أداء الواجبات المنزلية"],
    certificate: "شهادة معتمدة من الأكاديمية تؤهلك للانتقال للمستوى A2",
  },
  A2: {
    title: "المستوى الثاني - A2 (متوسط مبتدئ)",
    level: "متوسط مبتدئ",
    duration: "3 أشهر",
    description: "يبني هذا المستوى على المعرفة الأساسية المكتسبة في A1، ويطور مهارات التواصل في مواقف أكثر تعقيداً.",
    curriculum: [
      "قواعد اللغة المتوسطة",
      "التعبير عن الآراء والمشاعر",
      "وصف الأحداث الماضية والمستقبلية",
      "الحديث عن الهوايات والاهتمامات",
      "السفر والإجازات",
      "الصحة والجسم",
      "التعليم والعمل",
      "الثقافة الألمانية",
    ],
    requirements: [
      "إتمام مستوى A1 أو ما يعادله",
      "معرفة أساسية بقواعد اللغة الألمانية",
      "القدرة على التواصل في المواقف البسيطة",
    ],
    certificate: "شهادة معتمدة من الأكاديمية تؤهلك للانتقال للمستوى B1",
  },
  B1: {
    title: "المستوى الثالث - B1 (متوسط)",
    level: "متوسط",
    duration: "4 أشهر",
    description: "مستوى متوسط يركز على تطوير الطلاقة في التحدث والكتابة، مع التحضير لامتحان B1 المعتمد.",
    curriculum: [
      "قواعد اللغة المتقدمة",
      "الكتابة الرسمية وغير الرسمية",
      "فهم النصوص المعقدة",
      "المناقشات والعروض التقديمية",
      "الإعلام والأخبار",
      "البيئة والطبيعة",
      "التكنولوجيا والعلوم",
      "التحضير لامتحان B1",
    ],
    requirements: ["إتمام مستوى A2 أو ما يعادله", "القدرة على التعبير عن الآراء", "فهم النصوص البسيطة والمتوسطة"],
    certificate: "شهادة معتمدة من الأكاديمية + إعداد لامتحان Goethe B1",
  },
  B2: {
    title: "المستوى الرابع - B2 (متقدم)",
    level: "متقدم",
    duration: "4 أشهر",
    description: "مستوى متقدم يؤهلك للدراسة الجامعية والعمل في البيئة الألمانية، مع التحضير لامتحان B2.",
    curriculum: [
      "الكتابة الأكاديمية والمهنية",
      "فهم المحاضرات والعروض",
      "النقاش والجدل المنطقي",
      "الأدب والثقافة الألمانية",
      "الاقتصاد والسياسة",
      "العلوم والتكنولوجيا المتقدمة",
      "إعداد السيرة الذاتية",
      "التحضير لامتحان B2",
    ],
    requirements: ["إتمام مستوى B1 أو ما يعادله", "القدرة على المناقشة والتحليل", "فهم النصوص المعقدة"],
    certificate: "شهادة معتمدة من الأكاديمية + إعداد لامتحان Goethe B2",
  },
  C1: {
    title: "المستوى الخامس - C1 (متقدم جداً)",
    level: "متقدم جداً",
    duration: "5 أشهر",
    description: "مستوى متقدم جداً للطلاب الذين يريدون إتقان اللغة الألمانية على مستوى أكاديمي ومهني عالي.",
    curriculum: [
      "التعبير الطلق والمرن في جميع المواقف",
      "الكتابة الأكاديمية المتقدمة",
      "تحليل النصوص الأدبية والعلمية",
      "العروض التقديمية المهنية",
      "البحث العلمي والأكاديمي",
      "اللغة المتخصصة في مختلف المجالات",
      "الترجمة والتفسير",
      "التحضير لامتحان C1",
    ],
    requirements: ["إتمام مستوى B2 أو ما يعادله", "إتقان قواعد اللغة الألمانية", "القدرة على التعبير المعقد والدقيق"],
    certificate: "شهادة معتمدة من الأكاديمية + إعداد لامتحان Goethe C1",
  },
  C2: {
    title: "المستوى السادس - C2 (خبير)",
    level: "خبير",
    duration: "6 أشهر",
    description: "أعلى مستوى في اللغة الألمانية، يؤهلك لتكون خبيراً في اللغة قادراً على التدريس والترجمة المهنية.",
    curriculum: [
      "الإتقان الكامل لجميع جوانب اللغة",
      "فهم كل ما يُقرأ ويُسمع بسهولة",
      "التعبير التلقائي والدقيق جداً",
      "التمييز بين المعاني الدقيقة",
      "الكتابة الإبداعية والأدبية",
      "التحليل اللغوي المتقدم",
      "منهجية التدريس",
      "التحضير لامتحان C2",
    ],
    requirements: [
      "إتمام مستوى C1 أو ما يعادله",
      "إتقان شبه كامل للغة الألمانية",
      "خبرة في الكتابة الأكاديمية والمهنية",
      "القدرة على التحليل اللغوي المعمق",
    ],
    certificate: "شهادة معتمدة من الأكاديمية + إعداد لامتحان Goethe C2 + شهادة خبير في اللغة الألمانية",
  },
}

// Modal Elements
const modal = document.getElementById("courseModal")
const modalTitle = document.getElementById("modalTitle")
const modalLevel = document.getElementById("modalLevel")
const modalDuration = document.getElementById("modalDuration")
const modalPrice = document.getElementById("modalPrice")
const modalDescription = document.getElementById("modalDescription")
const modalCurriculum = document.getElementById("modalCurriculum")
const modalRequirements = document.getElementById("modalRequirements")
const modalCertificate = document.getElementById("modalCertificate")
const closeBtn = document.querySelector(".close")

// Course Card Click Events
document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("click", function () {
    const courseLevel = this.getAttribute("data-course")
    const courseData = courseDetails[courseLevel]

    if (courseData) {
      // Add active class for animation
      this.classList.add("active")
      setTimeout(() => {
        this.classList.remove("active")
      }, 300)

      // Populate modal with course data
      modalTitle.textContent = courseData.title
      modalLevel.innerHTML = `<strong>المستوى:</strong> ${courseData.level}`
      modalDuration.innerHTML = `<strong>المدة:</strong> ${courseData.duration}`
      modalDescription.textContent = courseData.description

      // Populate curriculum
      modalCurriculum.innerHTML = ""
      courseData.curriculum.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item
        modalCurriculum.appendChild(li)
      })

      // Populate requirements
      modalRequirements.innerHTML = ""
      courseData.requirements.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item
        modalRequirements.appendChild(li)
      })

      // Populate certificate info
      modalCertificate.textContent = courseData.certificate

      // Show modal
      modal.style.display = "block"
      document.body.style.overflow = "hidden"

      // تحديث نص زر التسجيل
      updateRegisterButtonText(courseLevel)
    }
  })
})

// Close modal events
closeBtn.addEventListener("click", closeModal)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal()
  }
})

function closeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

function scrollToRegistration() {
  closeModal()

  // الحصول على المستوى المحدد من العنوان في المودال
  const modalTitle = document.getElementById("modalTitle").textContent
  let selectedCourse = ""

  if (modalTitle.includes("A1")) selectedCourse = "A1"
  else if (modalTitle.includes("A2")) selectedCourse = "A2"
  else if (modalTitle.includes("B1")) selectedCourse = "B1"
  else if (modalTitle.includes("B2")) selectedCourse = "B2"
  else if (modalTitle.includes("C1")) selectedCourse = "C1"
  else if (modalTitle.includes("C2")) selectedCourse = "C2"

  // التمرير إلى نموذج التسجيل
  document.getElementById("registration").scrollIntoView({
    behavior: "smooth",
    block: "start",
  })

  // ملء حقل المستوى تلقائياً بعد التمرير
  setTimeout(() => {
    const courseSelect = document.getElementById("course")
    if (courseSelect && selectedCourse) {
      courseSelect.value = selectedCourse
      // إضافة تأثير بصري لإظهار أن الحقل تم ملؤه
      courseSelect.style.borderColor = "#28a745"
      courseSelect.style.backgroundColor = "#f8fff8"

      // إزالة التأثير بعد 3 ثوان
      setTimeout(() => {
        courseSelect.style.backgroundColor = ""
      }, 3000)
    }
  }, 1000)
}

// تحديث نص زر التسجيل في المودال ليكون أكثر وضوحاً
function updateRegisterButtonText(courseLevel) {
  const registerBtn = document.querySelector(".register-course-btn")
  if (registerBtn) {
    registerBtn.innerHTML = `سجل في مستوى ${courseLevel} الآن`
  }
}

// Form Submission Handler with Google Sheets Integration
const registrationForm = document.getElementById("registrationForm")

// Success Message Function
function showSuccessMessage() {
  // Create success message element
  const successMessage = document.createElement("div")
  successMessage.className = "success-message show"
  successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        شكراً لك! تم إرسال طلب التسجيل بنجاح. سنتواصل معك قريباً.
    `

  // Insert before the form
  const formContainer = document.querySelector(".registration-form-container")
  formContainer.insertBefore(successMessage, formContainer.firstChild)

  // Remove message after 5 seconds
  setTimeout(() => {
    successMessage.remove()
  }, 5000)
}

// Enhanced Clear Form Data Function
function clearFormData() {
  // Clear all form inputs
  const formInputs = document.querySelectorAll(
    "#registrationForm input, #registrationForm select, #registrationForm textarea",
  )

  formInputs.forEach((input) => {
    // Clear the value
    input.value = ""

    // Reset border colors to default
    input.style.borderColor = "#e1e5e9"

    // Clear localStorage for this input
    localStorage.removeItem(`form_${input.name}`)
  })

  // Reset select elements to their first option
  const selectElements = document.querySelectorAll("#registrationForm select")
  selectElements.forEach((select) => {
    select.selectedIndex = 0
  })

  // Clear any validation states
  formInputs.forEach((input) => {
    input.classList.remove("valid", "invalid")
  })

  console.log("تم مسح جميع بيانات النموذج بنجاح")
}

// Form Submission Handler with Enhanced Clearing
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)

  // Show loading state
  const submitBtn = this.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...'
  submitBtn.disabled = true

  // Send data to Google Sheets
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Reset button
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false

      if (data.result === "success") {
        // Show success message
        showSuccessMessage()

        // Reset form completely
        this.reset()

        // Enhanced form clearing
        clearFormData()

        // Scroll to success message
        const successMessage = document.querySelector(".success-message")
        if (successMessage) {
          successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }

        console.log("تم إرسال البيانات بنجاح إلى Google Sheets وتم مسح النموذج")
      } else {
        throw new Error(data.error || "حدث خطأ في الإرسال")
      }
    })
    .catch((error) => {
      // Reset button
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false

      console.error("خطأ في إرسال البيانات:", error)

      // Show error message
      showErrorMessage("حدث خطأ في إرسال البيانات. يرجى المحاولة مرة أخرى.")
    })
})

// Add error message function
function showErrorMessage(message) {
  const errorMessage = document.createElement("div")
  errorMessage.className = "error-message show"
  errorMessage.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        ${message}
    `

  const formContainer = document.querySelector(".registration-form-container")
  formContainer.insertBefore(errorMessage, formContainer.firstChild)

  setTimeout(() => {
    errorMessage.remove()
  }, 5000)
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "#fff"
    navbar.style.backdropFilter = "none"
  }
})

// Form validation enhancement
const inputs = document.querySelectorAll("input[required], select[required]")
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      this.style.borderColor = "#dc3545"
    } else {
      this.style.borderColor = "#28a745"
    }
  })

  input.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      this.style.borderColor = "#28a745"
    }
  })
})

// Email validation
const emailInput = document.getElementById("email")
if (emailInput) {
  emailInput.addEventListener("blur", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(this.value)) {
      this.style.borderColor = "#dc3545"
    } else {
      this.style.borderColor = "#28a745"
    }
  })
}

// Phone validation (basic)
const phoneInput = document.getElementById("phone")
if (phoneInput) {
  phoneInput.addEventListener("blur", function () {
    const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
    if (!phoneRegex.test(this.value)) {
      this.style.borderColor = "#dc3545"
    } else {
      this.style.borderColor = "#28a745"
    }
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".course-card, .contact-item, .feature").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Social media link tracking (for analytics)
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("click", function () {
    const platform = this.classList.contains("facebook") ? "Facebook" : "WhatsApp"
    console.log(`Social media click: ${platform}`)
    // Here you can add analytics tracking code
  })
})

// Course card hover effects
document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")
  }
})

// Enhanced Form auto-save to localStorage (optional)
const formInputs = document.querySelectorAll(
  "#registrationForm input, #registrationForm select, #registrationForm textarea",
)
formInputs.forEach((input) => {
  // Load saved data only if form is empty
  const savedValue = localStorage.getItem(`form_${input.name}`)
  if (savedValue && input.value === "") {
    input.value = savedValue
  }

  // Save data on change (but not after successful submission)
  input.addEventListener("change", function () {
    // Only save if the form hasn't been recently cleared
    if (!this.form.classList.contains("recently-cleared")) {
      localStorage.setItem(`form_${this.name}`, this.value)
    }
  })
})

// Add a manual clear button (optional)
function addClearButton() {
  const clearButton = document.createElement("button")
  clearButton.type = "button"
  clearButton.className = "clear-btn"
  clearButton.innerHTML = '<i class="fas fa-eraser"></i> مسح النموذج'
  clearButton.style.cssText = `
    background: #6c757d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s ease;
  `

  clearButton.addEventListener("click", () => {
    if (confirm("هل أنت متأكد من أنك تريد مسح جميع البيانات؟")) {
      registrationForm.reset()
      clearFormData()
    }
  })

  clearButton.addEventListener("mouseenter", () => {
    clearButton.style.background = "#5a6268"
  })

  clearButton.addEventListener("mouseleave", () => {
    clearButton.style.background = "#6c757d"
  })

  // Add button after submit button
  const submitBtn = document.querySelector(".submit-btn")
  submitBtn.parentNode.insertBefore(clearButton, submitBtn.nextSibling)
}

// Call the function to add clear button
addClearButton()

console.log("أكاديمية بريما للغات والترجمة - تم تحميل الموقع بنجاح!")

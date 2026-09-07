// ===================== PERSISTENCE (localStorage — frontend-only; see Settings note) =====================
const STORE_KEY = 'codenest_v2_state';
function loadSaved(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); }catch(e){ return {}; }
}
function saveState(){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify({
      progress: STATE.progress,
      editorCode: STATE.editor.code,
      audioEnabled: Bird.audioEnabled,
    }));
  }catch(e){}
}

// ===================== LEARNING LIBRARY =====================
// The previous script referenced LIB before defining it. This definition is now
// placed before STATE so the application can initialize normally.
const LIB = {
  "html": {
    "label": "HTML",
    "topics": [
      {
        "id": "h1",
        "title": "🅷 H1 — বড় Heading",
        "subtitle": "TEXT",
        "code": "<h1>Hello World</h1>",
        "what": "এটা দিয়ে বড় heading/শিরোনাম তৈরি করা হয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h1>Hello World</h1>"
        }
      },
      {
        "id": "h2",
        "title": "H2 — Heading",
        "subtitle": "TEXT",
        "code": "<h2>Sub Heading</h2>",
        "what": "এটা H1-এর চেয়ে ছোট heading তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h2>Sub Heading</h2>"
        }
      },
      {
        "id": "h3",
        "title": "H3 — Heading",
        "subtitle": "TEXT",
        "code": "<h3>Section Title</h3>",
        "what": "ছোট section heading তৈরি করতে ব্যবহার হয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h3>Section Title</h3>"
        }
      },
      {
        "id": "h4",
        "title": "H4 — Heading",
        "subtitle": "TEXT",
        "code": "<h4>Title</h4>",
        "what": "আরও ছোট heading।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h4>Title</h4>"
        }
      },
      {
        "id": "h5",
        "title": "H5 — Heading",
        "subtitle": "TEXT",
        "code": "<h5>Small Title</h5>",
        "what": "ছোট heading তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h5>Small Title</h5>"
        }
      },
      {
        "id": "h6",
        "title": "H6 — Heading",
        "subtitle": "TEXT",
        "code": "<h6>Tiny Title</h6>",
        "what": "সবচেয়ে ছোট heading।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<h6>Tiny Title</h6>"
        }
      },
      {
        "id": "p",
        "title": "P — Paragraph",
        "subtitle": "TEXT",
        "code": "<p>This is a paragraph.</p>",
        "what": "সাধারণ লেখা বা paragraph তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<p>This is a paragraph.</p>"
        }
      },
      {
        "id": "strong",
        "title": "Strong — Bold Important",
        "subtitle": "TEXT",
        "code": "<strong>Important text</strong>",
        "what": "গুরুত্বপূর্ণ লেখাকে bold করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<strong>Important text</strong>"
        }
      },
      {
        "id": "b",
        "title": "B — Bold",
        "subtitle": "TEXT",
        "code": "<b>Bold text</b>",
        "what": "লেখাকে মোটা/bold দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<b>Bold text</b>"
        }
      },
      {
        "id": "em",
        "title": "Em — Emphasis",
        "subtitle": "TEXT",
        "code": "<em>Emphasized text</em>",
        "what": "লেখায় emphasis বা জোর দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<em>Emphasized text</em>"
        }
      },
      {
        "id": "i",
        "title": "I — Italic",
        "subtitle": "TEXT",
        "code": "<i>Italic text</i>",
        "what": "লেখাকে italic করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<i>Italic text</i>"
        }
      },
      {
        "id": "u",
        "title": "U — Underline",
        "subtitle": "TEXT",
        "code": "<u>Underlined</u>",
        "what": "লেখার নিচে দাগ দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<u>Underlined</u>"
        }
      },
      {
        "id": "small",
        "title": "Small",
        "subtitle": "TEXT",
        "code": "<small>Small text</small>",
        "what": "ছোট লেখা দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<small>Small text</small>"
        }
      },
      {
        "id": "mark",
        "title": "Mark — Highlight",
        "subtitle": "TEXT",
        "code": "<mark>Highlighted</mark>",
        "what": "লেখা highlight করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<mark>Highlighted</mark>"
        }
      },
      {
        "id": "del",
        "title": "Del — Deleted",
        "subtitle": "TEXT",
        "code": "<del>Old price</del>",
        "what": "কাটা/deleted লেখা দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<del>Old price</del>"
        }
      },
      {
        "id": "ins",
        "title": "Ins — Inserted",
        "subtitle": "TEXT",
        "code": "<ins>New text</ins>",
        "what": "নতুন যোগ করা লেখা বোঝায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<ins>New text</ins>"
        }
      },
      {
        "id": "sub",
        "title": "Sub — নিচে",
        "subtitle": "TEXT",
        "code": "H<sub>2</sub>O",
        "what": "লেখা নিচের দিকে ছোট করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "H<sub>2</sub>O"
        }
      },
      {
        "id": "sup",
        "title": "Sup — উপরে",
        "subtitle": "TEXT",
        "code": "x<sup>2</sup>",
        "what": "লেখা উপরের দিকে ছোট করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "x<sup>2</sup>"
        }
      },
      {
        "id": "br",
        "title": "BR — Line Break",
        "subtitle": "TEXT",
        "code": "Hello<br>World",
        "what": "নতুন line তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "Hello<br>World"
        }
      },
      {
        "id": "hr",
        "title": "HR — Divider",
        "subtitle": "TEXT",
        "code": "<hr>",
        "what": "একটি horizontal divider দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<hr>"
        }
      },
      {
        "id": "blockquote",
        "title": "Blockquote",
        "subtitle": "TEXT",
        "code": "<blockquote>A useful quote.</blockquote>",
        "what": "Quote বা উদ্ধৃতি দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<blockquote>A useful quote.</blockquote>"
        }
      },
      {
        "id": "pre",
        "title": "Pre — Preformatted",
        "subtitle": "TEXT",
        "code": "<pre>  Keep   spaces\n  exactly</pre>",
        "what": "space ও line break ধরে রাখে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<pre>  Keep   spaces\n  exactly</pre>"
        }
      },
      {
        "id": "code",
        "title": "Code — Code Text",
        "subtitle": "TEXT",
        "code": "<code>console.log(\"Hello\");</code>",
        "what": "code snippet দেখাতে ব্যবহার হয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<code>console.log(\"Hello\");</code>"
        }
      },
      {
        "id": "img",
        "title": "🖼️ Image",
        "subtitle": "IMAGE",
        "code": "<img src=\"https://picsum.photos/300/180\" alt=\"Example image\">",
        "what": "ওয়েবপেজে ছবি দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<img src=\"https://picsum.photos/300/180\" alt=\"Example image\">"
        }
      },
      {
        "id": "imgw",
        "title": "Image Width",
        "subtitle": "IMAGE",
        "code": "<img src=\"https://picsum.photos/300/180\" alt=\"Example\" width=\"300\">",
        "what": "ছবির width নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<img src=\"https://picsum.photos/300/180\" alt=\"Example\" width=\"300\">"
        }
      },
      {
        "id": "imgh",
        "title": "Image Height",
        "subtitle": "IMAGE",
        "code": "<img src=\"https://picsum.photos/300/180\" alt=\"Example\" height=\"180\">",
        "what": "ছবির height নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<img src=\"https://picsum.photos/300/180\" alt=\"Example\" height=\"180\">"
        }
      },
      {
        "id": "imgalt",
        "title": "Image Alt",
        "subtitle": "IMAGE",
        "code": "<img src=\"image.jpg\" alt=\"My image\">",
        "what": "ছবি না দেখালে বা accessibility-এর জন্য alternative text দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<img src=\"image.jpg\" alt=\"My image\">"
        }
      },
      {
        "id": "imglink",
        "title": "Clickable Image",
        "subtitle": "IMAGE",
        "code": "<a href=\"https://example.com\"><img src=\"https://picsum.photos/200\" alt=\"Open\"></a>",
        "what": "ছবিকে clickable link বানায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://example.com\"><img src=\"https://picsum.photos/200\" alt=\"Open\"></a>"
        }
      },
      {
        "id": "a",
        "title": "🔗 Link",
        "subtitle": "LINK",
        "code": "<a href=\"https://example.com\">Visit Website</a>",
        "what": "অন্য page বা website-এ link তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://example.com\">Visit Website</a>"
        }
      },
      {
        "id": "blank",
        "title": "Link target blank",
        "subtitle": "LINK",
        "code": "<a href=\"https://example.com\" target=\"_blank\">Open New Tab</a>",
        "what": "নতুন tab-এ link খোলে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://example.com\" target=\"_blank\">Open New Tab</a>"
        }
      },
      {
        "id": "mailto",
        "title": "Mailto Link",
        "subtitle": "LINK",
        "code": "<a href=\"mailto:hello@example.com\">Email Me</a>",
        "what": "email করার link তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"mailto:hello@example.com\">Email Me</a>"
        }
      },
      {
        "id": "tel",
        "title": "Telephone Link",
        "subtitle": "LINK",
        "code": "<a href=\"tel:+8801000000000\">Call Me</a>",
        "what": "ফোন করার link তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"tel:+8801000000000\">Call Me</a>"
        }
      },
      {
        "id": "button",
        "title": "🔘 Button",
        "subtitle": "BUTTON",
        "code": "<button>Click Me</button>",
        "what": "একটি clickable button তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<button>Click Me</button>"
        }
      },
      {
        "id": "onclick",
        "title": "Button onclick",
        "subtitle": "BUTTON",
        "code": "<button onclick=\"alert('Hello!')\">Click Me</button>",
        "what": "button click করলে JavaScript action চালায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<button onclick=\"alert('Hello!')\">Click Me</button>"
        }
      },
      {
        "id": "alert",
        "title": "Alert Button",
        "subtitle": "BUTTON",
        "code": "<button onclick=\"alert('Hello World')\">Show Alert</button>",
        "what": "click করলে alert message দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<button onclick=\"alert('Hello World')\">Show Alert</button>"
        }
      },
      {
        "id": "form",
        "title": "📝 Form",
        "subtitle": "FORM",
        "code": "<form><label>Name</label><input type=\"text\"></form>",
        "what": "user-এর কাছ থেকে data নেওয়ার form।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<form><label>Name</label><input type=\"text\"></form>"
        }
      },
      {
        "id": "textinput",
        "title": "Text Input",
        "subtitle": "FORM",
        "code": "<label>Name</label><input type=\"text\" placeholder=\"Your name\">",
        "what": "সাধারণ text input তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<label>Name</label><input type=\"text\" placeholder=\"Your name\">"
        }
      },
      {
        "id": "email",
        "title": "Email Input",
        "subtitle": "FORM",
        "code": "<input type=\"email\" placeholder=\"Email\">",
        "what": "email address নেওয়ার input।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<input type=\"email\" placeholder=\"Email\">"
        }
      },
      {
        "id": "number",
        "title": "Number Input",
        "subtitle": "FORM",
        "code": "<input type=\"number\" placeholder=\"Age\">",
        "what": "সংখ্যা নেওয়ার input।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<input type=\"number\" placeholder=\"Age\">"
        }
      },
      {
        "id": "password",
        "title": "Password Input",
        "subtitle": "FORM",
        "code": "<input type=\"password\" placeholder=\"Password\">",
        "what": "password input তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<input type=\"password\" placeholder=\"Password\">"
        }
      },
      {
        "id": "date",
        "title": "Date Input",
        "subtitle": "FORM",
        "code": "<input type=\"date\">",
        "what": "তারিখ নির্বাচন করতে দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<input type=\"date\">"
        }
      },
      {
        "id": "checkbox",
        "title": "Checkbox",
        "subtitle": "FORM",
        "code": "<label><input type=\"checkbox\"> I agree</label>",
        "what": "এক বা একাধিক option নির্বাচন করতে দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<label><input type=\"checkbox\"> I agree</label>"
        }
      },
      {
        "id": "radio",
        "title": "Radio",
        "subtitle": "FORM",
        "code": "<label><input type=\"radio\" name=\"g\"> Male</label><label><input type=\"radio\" name=\"g\"> Female</label>",
        "what": "একটি option নির্বাচন করার জন্য।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<label><input type=\"radio\" name=\"g\"> Male</label><label><input type=\"radio\" name=\"g\"> Female</label>"
        }
      },
      {
        "id": "select",
        "title": "Select",
        "subtitle": "FORM",
        "code": "<select><option>Dhaka</option><option>Munshiganj</option></select>",
        "what": "dropdown তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<select><option>Dhaka</option><option>Munshiganj</option></select>"
        }
      },
      {
        "id": "option",
        "title": "Option",
        "subtitle": "FORM",
        "code": "<select><option>Option 1</option><option>Option 2</option></select>",
        "what": "select-এর ভেতরের option।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<select><option>Option 1</option><option>Option 2</option></select>"
        }
      },
      {
        "id": "textarea",
        "title": "Textarea",
        "subtitle": "FORM",
        "code": "<textarea rows=\"4\" placeholder=\"Write here...\"></textarea>",
        "what": "একাধিক line-এর লেখা নেওয়ার box।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<textarea rows=\"4\" placeholder=\"Write here...\"></textarea>"
        }
      },
      {
        "id": "label",
        "title": "Label",
        "subtitle": "FORM",
        "code": "<label for=\"name\">Name</label><input id=\"name\">",
        "what": "form input-এর label দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<label for=\"name\">Name</label><input id=\"name\">"
        }
      },
      {
        "id": "submit",
        "title": "Submit Button",
        "subtitle": "FORM",
        "code": "<button type=\"submit\">Submit</button>",
        "what": "form submit করার button।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<button type=\"submit\">Submit</button>"
        }
      },
      {
        "id": "table",
        "title": "📊 Table",
        "subtitle": "TABLE",
        "code": "<table border=\"1\"><tr><th>Name</th><th>Age</th></tr><tr><td>Sanjid</td><td>18</td></tr></table>",
        "what": "row ও column-এর table তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<table border=\"1\"><tr><th>Name</th><th>Age</th></tr><tr><td>Sanjid</td><td>18</td></tr></table>"
        }
      },
      {
        "id": "caption",
        "title": "Table Caption",
        "subtitle": "TABLE",
        "code": "<table border=\"1\"><caption>Students</caption><tr><td>A</td></tr></table>",
        "what": "table-এর title/caption দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<table border=\"1\"><caption>Students</caption><tr><td>A</td></tr></table>"
        }
      },
      {
        "id": "thead",
        "title": "Table Head",
        "subtitle": "TABLE",
        "code": "<table><thead><tr><th>Name</th></tr></thead></table>",
        "what": "table-এর header section।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<table><thead><tr><th>Name</th></tr></thead></table>"
        }
      },
      {
        "id": "tbody",
        "title": "Table Body",
        "subtitle": "TABLE",
        "code": "<table><tbody><tr><td>Sanjid</td></tr></tbody></table>",
        "what": "table-এর main data section।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<table><tbody><tr><td>Sanjid</td></tr></tbody></table>"
        }
      },
      {
        "id": "tfoot",
        "title": "Table Footer",
        "subtitle": "TABLE",
        "code": "<table><tfoot><tr><td>Total</td></tr></tfoot></table>",
        "what": "table-এর footer section।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<table><tfoot><tr><td>Total</td></tr></tfoot></table>"
        }
      },
      {
        "id": "tr",
        "title": "Table Row",
        "subtitle": "TABLE",
        "code": "<tr><td>Cell</td></tr>",
        "what": "table row তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<tr><td>Cell</td></tr>"
        }
      },
      {
        "id": "th",
        "title": "Table Header Cell",
        "subtitle": "TABLE",
        "code": "<tr><th>Name</th></tr>",
        "what": "table-এর heading cell।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<tr><th>Name</th></tr>"
        }
      },
      {
        "id": "td",
        "title": "Table Data Cell",
        "subtitle": "TABLE",
        "code": "<tr><td>Sanjid</td></tr>",
        "what": "table-এর সাধারণ data cell।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<tr><td>Sanjid</td></tr>"
        }
      },
      {
        "id": "ul",
        "title": "📋 Unordered List",
        "subtitle": "LIST",
        "code": "<ul><li>Apple</li><li>Mango</li></ul>",
        "what": "bullet list তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<ul><li>Apple</li><li>Mango</li></ul>"
        }
      },
      {
        "id": "ol",
        "title": "Ordered List",
        "subtitle": "LIST",
        "code": "<ol><li>First</li><li>Second</li></ol>",
        "what": "numbered list তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<ol><li>First</li><li>Second</li></ol>"
        }
      },
      {
        "id": "li",
        "title": "List Item",
        "subtitle": "LIST",
        "code": "<ul><li>Item</li></ul>",
        "what": "list-এর একটি item।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<ul><li>Item</li></ul>"
        }
      },
      {
        "id": "dl",
        "title": "Description List",
        "subtitle": "LIST",
        "code": "<dl><dt>HTML</dt><dd>Markup language</dd></dl>",
        "what": "term ও description-এর list।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<dl><dt>HTML</dt><dd>Markup language</dd></dl>"
        }
      },
      {
        "id": "dt",
        "title": "Description Term",
        "subtitle": "LIST",
        "code": "<dl><dt>HTML</dt><dd>Markup</dd></dl>",
        "what": "description list-এর term।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<dl><dt>HTML</dt><dd>Markup</dd></dl>"
        }
      },
      {
        "id": "dd",
        "title": "Description Detail",
        "subtitle": "LIST",
        "code": "<dl><dt>HTML</dt><dd>Markup language</dd></dl>",
        "what": "term-এর description।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<dl><dt>HTML</dt><dd>Markup language</dd></dl>"
        }
      },
      {
        "id": "header",
        "title": "Header",
        "subtitle": "SEMANTIC",
        "code": "<header><h1>My Site</h1></header>",
        "what": "page বা section-এর header।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<header><h1>My Site</h1></header>"
        }
      },
      {
        "id": "nav",
        "title": "Navigation",
        "subtitle": "SEMANTIC",
        "code": "<nav><a href=\"#\">Home</a> <a href=\"#\">About</a></nav>",
        "what": "navigation links-এর section।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<nav><a href=\"#\">Home</a> <a href=\"#\">About</a></nav>"
        }
      },
      {
        "id": "main",
        "title": "Main",
        "subtitle": "SEMANTIC",
        "code": "<main><h1>Main Content</h1></main>",
        "what": "page-এর প্রধান content।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<main><h1>Main Content</h1></main>"
        }
      },
      {
        "id": "section",
        "title": "Section",
        "subtitle": "SEMANTIC",
        "code": "<section><h2>About</h2><p>Content</p></section>",
        "what": "content-এর একটি আলাদা section।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<section><h2>About</h2><p>Content</p></section>"
        }
      },
      {
        "id": "article",
        "title": "Article",
        "subtitle": "SEMANTIC",
        "code": "<article><h2>Post</h2><p>Text</p></article>",
        "what": "স্বতন্ত্র article/content।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<article><h2>Post</h2><p>Text</p></article>"
        }
      },
      {
        "id": "aside",
        "title": "Aside",
        "subtitle": "SEMANTIC",
        "code": "<aside>Related content</aside>",
        "what": "side বা related content।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<aside>Related content</aside>"
        }
      },
      {
        "id": "footer",
        "title": "Footer",
        "subtitle": "SEMANTIC",
        "code": "<footer>© 2026 My Website</footer>",
        "what": "page/section-এর footer।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<footer>© 2026 My Website</footer>"
        }
      },
      {
        "id": "audio",
        "title": "🔊 Audio",
        "subtitle": "MEDIA",
        "code": "<audio controls><source src=\"audio.mp3\" type=\"audio/mpeg\"></audio>",
        "what": "audio player দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<audio controls><source src=\"audio.mp3\" type=\"audio/mpeg\"></audio>"
        }
      },
      {
        "id": "video",
        "title": "🎬 Video",
        "subtitle": "MEDIA",
        "code": "<video controls width=\"320\"><source src=\"video.mp4\" type=\"video/mp4\"></video>",
        "what": "video player দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<video controls width=\"320\"><source src=\"video.mp4\" type=\"video/mp4\"></video>"
        }
      },
      {
        "id": "source",
        "title": "Source",
        "subtitle": "MEDIA",
        "code": "<video controls><source src=\"video.mp4\" type=\"video/mp4\"></video>",
        "what": "audio/video-এর media source দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<video controls><source src=\"video.mp4\" type=\"video/mp4\"></video>"
        }
      },
      {
        "id": "iframe",
        "title": "Iframe",
        "subtitle": "MEDIA",
        "code": "<iframe src=\"https://example.com\" width=\"100%\" height=\"250\"></iframe>",
        "what": "অন্য webpage/embed content দেখায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<iframe src=\"https://example.com\" width=\"100%\" height=\"250\"></iframe>"
        }
      },
      {
        "id": "youtube",
        "title": "YouTube iframe",
        "subtitle": "MEDIA",
        "code": "<iframe width=\"100%\" height=\"250\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" allowfullscreen></iframe>",
        "what": "YouTube video embed করার example।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<iframe width=\"100%\" height=\"250\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" allowfullscreen></iframe>"
        }
      },
      {
        "id": "canvas",
        "title": "🎨 Canvas",
        "subtitle": "MEDIA",
        "code": "<canvas id=\"c\" width=\"300\" height=\"150\" style=\"border:1px solid\"></canvas>",
        "what": "JavaScript দিয়ে graphics আঁকার canvas।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<canvas id=\"c\" width=\"300\" height=\"150\" style=\"border:1px solid\"></canvas>"
        }
      },
      {
        "id": "bgcolor",
        "title": "Background Color",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"background-color:yellow;padding:20px;\">Yellow</div>",
        "what": "element-এর background color দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"background-color:yellow;padding:20px;\">Yellow</div>"
        }
      },
      {
        "id": "bgimage",
        "title": "Background Image",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"background-image:url('https://picsum.photos/500');height:200px;background-size:cover\"></div>",
        "what": "background হিসেবে image ব্যবহার করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"background-image:url('https://picsum.photos/500');height:200px;background-size:cover\"></div>"
        }
      },
      {
        "id": "gradient",
        "title": "Gradient",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"background:linear-gradient(90deg,#00c6ff,#0072ff);padding:40px;\">Gradient</div>",
        "what": "দুই বা বেশি color-এর gradient তৈরি করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"background:linear-gradient(90deg,#00c6ff,#0072ff);padding:40px;\">Gradient</div>"
        }
      },
      {
        "id": "color",
        "title": "Text Color",
        "subtitle": "BACKGROUND",
        "code": "<p style=\"color:#00d6a0\">Green text</p>",
        "what": "লেখার color পরিবর্তন করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<p style=\"color:#00d6a0\">Green text</p>"
        }
      },
      {
        "id": "border",
        "title": "Border",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"border:2px solid #00d6a0;padding:15px\">Border</div>",
        "what": "element-এর চারপাশে border দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"border:2px solid #00d6a0;padding:15px\">Border</div>"
        }
      },
      {
        "id": "padding",
        "title": "Padding",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"padding:25px;background:#123\">Padded content</div>",
        "what": "ভেতরের space নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"padding:25px;background:#123\">Padded content</div>"
        }
      },
      {
        "id": "margin",
        "title": "Margin",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"margin:25px\">Content</div>",
        "what": "element-এর বাইরের space নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"margin:25px\">Content</div>"
        }
      },
      {
        "id": "width",
        "title": "Width",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"width:200px;background:#123\">Width</div>",
        "what": "element-এর width নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"width:200px;background:#123\">Width</div>"
        }
      },
      {
        "id": "height",
        "title": "Height",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"height:100px;background:#123\">Height</div>",
        "what": "element-এর height নির্ধারণ করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"height:100px;background:#123\">Height</div>"
        }
      },
      {
        "id": "radius",
        "title": "Border Radius",
        "subtitle": "BACKGROUND",
        "code": "<div style=\"border-radius:20px;background:#123;padding:20px\">Rounded</div>",
        "what": "corner গোল করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<div style=\"border-radius:20px;background:#123;padding:20px\">Rounded</div>"
        }
      },
      {
        "id": "fade",
        "title": "✨ Fade Animation",
        "subtitle": "ANIMATION",
        "code": "<style>@keyframes fade{from{opacity:0}to{opacity:1}}.fade{animation:fade 2s infinite alternate}</style><h2 class=\"fade\">Fade</h2>",
        "what": "fade in/out animation-এর example।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<style>@keyframes fade{from{opacity:0}to{opacity:1}}.fade{animation:fade 2s infinite alternate}</style><h2 class=\"fade\">Fade</h2>"
        }
      },
      {
        "id": "rotate",
        "title": "🔄 Rotate Animation",
        "subtitle": "ANIMATION",
        "code": "<style>@keyframes spin{to{transform:rotate(360deg)}}.spin{display:inline-block;animation:spin 2s linear infinite}</style><div class=\"spin\">⟳</div>",
        "what": "element ঘোরানোর animation।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<style>@keyframes spin{to{transform:rotate(360deg)}}.spin{display:inline-block;animation:spin 2s linear infinite}</style><div class=\"spin\">⟳</div>"
        }
      },
      {
        "id": "move",
        "title": "↔️ Move Animation",
        "subtitle": "ANIMATION",
        "code": "<style>@keyframes move{to{transform:translateX(150px)}}.move{animation:move 2s alternate infinite}</style><div class=\"move\">Move</div>",
        "what": "element সামনে-পেছনে move করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<style>@keyframes move{to{transform:translateX(150px)}}.move{animation:move 2s alternate infinite}</style><div class=\"move\">Move</div>"
        }
      },
      {
        "id": "scale",
        "title": "🔍 Scale Animation",
        "subtitle": "ANIMATION",
        "code": "<style>@keyframes scale{to{transform:scale(1.5)}}.scale{display:inline-block;animation:scale 1s alternate infinite}</style><div class=\"scale\">Scale</div>",
        "what": "element বড়/ছোট করার animation।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<style>@keyframes scale{to{transform:scale(1.5)}}.scale{display:inline-block;animation:scale 1s alternate infinite}</style><div class=\"scale\">Scale</div>"
        }
      },
      {
        "id": "whatsapp",
        "title": "🟢 WhatsApp",
        "subtitle": "SOCIAL",
        "code": "<a href=\"https://wa.me/8801628801587\">WhatsApp</a>",
        "what": "WhatsApp contact link।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://wa.me/8801628801587\">WhatsApp</a>"
        }
      },
      {
        "id": "facebook",
        "title": "🔵 Facebook",
        "subtitle": "SOCIAL",
        "code": "<a href=\"https://facebook.com\" target=\"_blank\">Facebook</a>",
        "what": "Facebook profile/page link।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://facebook.com\" target=\"_blank\">Facebook</a>"
        }
      },
      {
        "id": "youtubeSocial",
        "title": "▶️ YouTube",
        "subtitle": "SOCIAL",
        "code": "<a href=\"https://youtube.com\" target=\"_blank\">YouTube</a>",
        "what": "YouTube link।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://youtube.com\" target=\"_blank\">YouTube</a>"
        }
      },
      {
        "id": "instagram",
        "title": "📸 Instagram",
        "subtitle": "SOCIAL",
        "code": "<a href=\"https://instagram.com\" target=\"_blank\">Instagram</a>",
        "what": "Instagram link।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<a href=\"https://instagram.com\" target=\"_blank\">Instagram</a>"
        }
      },
      {
        "id": "doctype",
        "title": "📄 DOCTYPE",
        "subtitle": "OTHER",
        "code": "<!DOCTYPE html>",
        "what": "browser-কে HTML5 document হিসেবে জানায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<!DOCTYPE html>"
        }
      },
      {
        "id": "html",
        "title": "HTML Root",
        "subtitle": "OTHER",
        "code": "<html lang=\"en\">\n</html>",
        "what": "পুরো HTML document-এর root element।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<html lang=\"en\">\n</html>"
        }
      },
      {
        "id": "head",
        "title": "Head",
        "subtitle": "OTHER",
        "code": "<head>\n    <title>My Page</title>\n</head>",
        "what": "metadata, title, style ইত্যাদি রাখে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<head>\n    <title>My Page</title>\n</head>"
        }
      },
      {
        "id": "title",
        "title": "Title",
        "subtitle": "OTHER",
        "code": "<title>My Website</title>",
        "what": "browser tab-এর title সেট করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<title>My Website</title>"
        }
      },
      {
        "id": "meta",
        "title": "Meta",
        "subtitle": "OTHER",
        "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        "what": "document-এর metadata দেয়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
        }
      },
      {
        "id": "link",
        "title": "Link Resource",
        "subtitle": "OTHER",
        "code": "<link rel=\"stylesheet\" href=\"style.css\">",
        "what": "external CSS/resource যুক্ত করে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<link rel=\"stylesheet\" href=\"style.css\">"
        }
      },
      {
        "id": "style",
        "title": "Style",
        "subtitle": "OTHER",
        "code": "<style>body{font-family:Arial}</style>",
        "what": "HTML-এর মধ্যে CSS লেখে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<style>body{font-family:Arial}</style>"
        }
      },
      {
        "id": "script",
        "title": "Script",
        "subtitle": "OTHER",
        "code": "<script>console.log(\"Hello\");</script>",
        "what": "JavaScript যুক্ত বা চালায়।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<script>console.log(\"Hello\");</script>"
        }
      },
      {
        "id": "body",
        "title": "Body",
        "subtitle": "OTHER",
        "code": "<body>\n    <h1>Visible content</h1>\n</body>",
        "what": "যে content browser-এ দেখা যায় তা রাখে।",
        "how": "এই উদাহরণটি edit করে attribute, text ও structure পরিবর্তন করে practice করো.",
        "where": "HTML page তৈরি ও coding practice-এর সময় ব্যবহার করতে পারো.",
        "demo": {
          "html": "<body>\n    <h1>Visible content</h1>\n</body>"
        }
      }
    ]
  },
  "css": {
    "label": "CSS",
    "topics": [
      {
        "id": "selectors",
        "title": "CSS Selectors",
        "subtitle": "CSS lesson",
        "code": "body { color: white; }",
        "what": "Selector দিয়ে কোন HTML element-এ style যাবে তা নির্ধারণ করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h2>CSS Selector Demo</h2>",
          "css": "body{background:#111;color:#fff} h2{color:#f2a541}"
        }
      },
      {
        "id": "colors",
        "title": "Colors & Background",
        "subtitle": "CSS lesson",
        "code": "body { color: white; background: #111; }",
        "what": "লেখা ও background-এর color সেট করে.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<div class='box'>Colors</div>",
          "css": "body{background:#111}.box{color:#fff;background:#f2a541;padding:20px"
        }
      },
      {
        "id": "spacing",
        "title": "Margin & Padding",
        "subtitle": "CSS lesson",
        "code": ".card { margin: 20px; padding: 16px; }",
        "what": "Element-এর বাইরের ও ভেতরের space নিয়ন্ত্রণ করে.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<div class='card'>Spacing</div>",
          "css": ".card{margin:20px;padding:16px;background:#333;color:#fff}"
        }
      },
      {
        "id": "box",
        "title": "Border & Radius",
        "subtitle": "CSS lesson",
        "code": ".card { border: 1px solid #444; border-radius: 12px; }",
        "what": "Border এবং corner round করা যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<div class='card'>Border</div>",
          "css": ".card{border:2px solid #f2a541;border-radius:12px;padding:20px;color:#fff}"
        }
      },
      {
        "id": "flex",
        "title": "Flexbox",
        "subtitle": "CSS lesson",
        "code": ".row { display: flex; justify-content: center; gap: 10px; }",
        "what": "Flexbox দিয়ে element সাজানো ও align করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<div class='row'><b>A</b><b>B</b><b>C</b></div>",
          "css": "body{color:#fff}.row{display:flex;justify-content:center;gap:10px}"
        }
      },
      {
        "id": "grid",
        "title": "CSS Grid",
        "subtitle": "CSS lesson",
        "code": ".grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }",
        "what": "Rows ও columns-এর layout তৈরি করে.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<div class='grid'><b>A</b><b>B</b><b>C</b><b>D</b></div>",
          "css": "body{color:#fff}.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.grid b{padding:12px;background:#333}"
        }
      },
      {
        "id": "text",
        "title": "Text Styling",
        "subtitle": "CSS lesson",
        "code": "h1 { font-size: 28px; font-weight: 700; text-align: center; }",
        "what": "Text-এর size, weight ও alignment পরিবর্তন করে.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h1>Styled Text</h1>",
          "css": "h1{font-size:28px;font-weight:700;text-align:center;color:#f2a541}"
        }
      },
      {
        "id": "responsive",
        "title": "Responsive CSS",
        "subtitle": "CSS lesson",
        "code": "@media (max-width: 600px) { h1 { font-size: 22px; } }",
        "what": "Screen size অনুযায়ী style বদলাতে media query ব্যবহার হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "CSS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h1>Resize the screen</h1>",
          "css": "h1{font-size:40px;color:#f2a541}@media(max-width:600px){h1{font-size:22px}}"
        }
      }
    ]
  },
  "js": {
    "label": "JavaScript",
    "topics": [
      {
        "id": "variables",
        "title": "Variables",
        "subtitle": "JS lesson",
        "code": "const name = 'Sanjid';\nlet count = 0;\nconsole.log(name);",
        "what": "Data রাখার জন্য const ও let variable ব্যবহার করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3>Check the browser console</h3>",
          "js": "const name='Sanjid'; let count=0; console.log(name,count);"
        }
      },
      {
        "id": "functions",
        "title": "Functions",
        "subtitle": "JS lesson",
        "code": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Sanjid'));",
        "what": "একই কাজ বারবার ব্যবহার করার জন্য function তৈরি করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3>Function example</h3>",
          "js": "function greet(name){return 'Hello '+name} console.log(greet('Sanjid'));"
        }
      },
      {
        "id": "conditions",
        "title": "If / Else",
        "subtitle": "JS lesson",
        "code": "const age = 18;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Under 18');\n}",
        "what": "Condition অনুযায়ী আলাদা code চালায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3>Condition example</h3>",
          "js": "const age=18;if(age>=18){document.querySelector('h3').textContent='Adult'}else{document.querySelector('h3').textContent='Under 18'}"
        }
      },
      {
        "id": "loops",
        "title": "For Loop",
        "subtitle": "JS lesson",
        "code": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
        "what": "একই code একাধিকবার চালাতে loop ব্যবহার হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3 id='out'>Loop running...</h3>",
          "js": "let text='';for(let i=1;i<=5;i++){text+=i+' '}document.getElementById('out').textContent=text;"
        }
      },
      {
        "id": "arrays",
        "title": "Arrays",
        "subtitle": "JS lesson",
        "code": "const fruits = ['Apple', 'Mango', 'Banana'];\nconsole.log(fruits[0]);",
        "what": "একাধিক value একটি collection-এ রাখা যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3 id='out'></h3>",
          "js": "const fruits=['Apple','Mango','Banana'];document.getElementById('out').textContent=fruits[0];"
        }
      },
      {
        "id": "objects",
        "title": "Objects",
        "subtitle": "JS lesson",
        "code": "const user = { name: 'Sanjid', age: 18 };\nconsole.log(user.name);",
        "what": "Related data key-value আকারে রাখা যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h3 id='out'></h3>",
          "js": "const user={name:'Sanjid',age:18};document.getElementById('out').textContent=user.name;"
        }
      },
      {
        "id": "dom",
        "title": "DOM Selection",
        "subtitle": "JS lesson",
        "code": "const title = document.querySelector('h1');\ntitle.textContent = 'Hello!';",
        "what": "JavaScript দিয়ে HTML element খুঁজে পরিবর্তন করা যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<h1>Old title</h1>",
          "js": "const title=document.querySelector('h1');title.textContent='Hello!';"
        }
      },
      {
        "id": "events",
        "title": "Click Event",
        "subtitle": "JS lesson",
        "code": "document.getElementById('btn').addEventListener('click', () => alert('Hello!'));",
        "what": "User action যেমন click হলে JavaScript চালানো যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "JS শেখার সময় এই conceptটি ব্যবহার হবে.",
        "demo": {
          "html": "<button id='btn'>Click Me</button>",
          "js": "document.getElementById('btn').addEventListener('click',()=>alert('Hello!'));"
        }
      }
    ]
  },
  "python": {
    "label": "Python",
    "topics": [
      {
        "id": "print",
        "title": "print()",
        "subtitle": "PYTHON lesson",
        "code": "print('Hello, Sanjid!')",
        "what": "Screen-এ output দেখানোর জন্য print() ব্যবহার হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "variables",
        "title": "Variables",
        "subtitle": "PYTHON lesson",
        "code": "name = 'Sanjid'\nage = 18\nprint(name, age)",
        "what": "Data রাখার জন্য variable ব্যবহার করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "if",
        "title": "If / Else",
        "subtitle": "PYTHON lesson",
        "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Under 18')",
        "what": "Condition অনুযায়ী code চালায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "for",
        "title": "For Loop",
        "subtitle": "PYTHON lesson",
        "code": "for i in range(5):\n    print(i)",
        "what": "একই কাজ বারবার করার জন্য for loop ব্যবহার হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "while",
        "title": "While Loop",
        "subtitle": "PYTHON lesson",
        "code": "i = 0\nwhile i < 3:\n    print(i)\n    i = i + 1",
        "what": "Condition true থাকা পর্যন্ত loop চলে.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "list",
        "title": "Lists",
        "subtitle": "PYTHON lesson",
        "code": "fruits = ['Apple', 'Mango', 'Banana']\nprint(fruits[0])",
        "what": "একাধিক value list-এর মধ্যে রাখা যায়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "function",
        "title": "Functions",
        "subtitle": "PYTHON lesson",
        "code": "def greet(name):\n    return f'Hello, {name}!'\nprint(greet('Sanjid'))",
        "what": "Reusable কাজের জন্য function তৈরি করা হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      },
      {
        "id": "fstring",
        "title": "F-Strings",
        "subtitle": "PYTHON lesson",
        "code": "name = 'Sanjid'\nprint(f'Hello, {name}!')",
        "what": "String-এর মধ্যে variable সহজে বসাতে f-string ব্যবহার হয়.",
        "how": "Code-টি edit করে value বদলে Run/Preview দেখে practice করো.",
        "where": "PYTHON শেখার সময় এই conceptটি ব্যবহার হবে."
      }
    ]
  }
};

// ===================== STATE =====================
const STARTER = {
  html: `<h1>Hello!</h1>\n<p>Edit this HTML and watch the preview update.</p>\n<button id="btn">Tap me</button>`,
  css: `body { font-family: sans-serif; color: #eee; background:#111; }\nh1 { color: #f2a541; }`,
  js: `console.log("Hello from JavaScript!");\nfor (let i = 1; i <= 3; i++) {\n  console.log("count:", i);\n}`,
  python: `name = "coder"\nfor i in range(3):\n    print(f"Hello, {name}! ({i})")`
};
const SAVED = loadSaved();
const STATE = {
  progress: SAVED.progress || {},
  editor: { lang:"html", code: SAVED.editorCode || JSON.parse(JSON.stringify(STARTER)), cm:null },
  activeTopic: { html:null, css:null, js:null, python:null },
  activeLangFilter: {},
};
for (const lang of Object.keys(LIB)) if (!STATE.progress[lang]) STATE.progress[lang] = {};
function topicState(lang,id){ return STATE.progress[lang][id] || { opened:false, copied:false, ran:false, mark:null }; }
function setTopicState(lang,id,patch){
  const cur = topicState(lang,id);
  STATE.progress[lang][id] = Object.assign({}, cur, patch);
  saveState();
}
function topicScore(lang,id){
  const s = topicState(lang,id);
  let score = 0;
  if (s.opened) score += 0.1;
  if (s.copied) score += 0.1;
  if (s.ran) score += 0.15;
  if (s.mark === 'learning') score += 0.3;
  if (s.mark === 'learned') score += 0.65;
  return Math.min(1, score);
}
function topicStatusLabel(lang,id){
  const s = topicState(lang,id);
  if (s.mark === 'learned') return 'learned';
  if (s.mark === 'learning') return 'learning';
  if (s.opened || s.copied || s.ran) return 'opened';
  return 'none';
}
function langPercent(lang){
  const topics = LIB[lang].topics;
  const sum = topics.reduce((a,t)=> a + topicScore(lang,t.id), 0);
  return Math.round((sum/topics.length)*100);
}
function overallPercent(){
  const langs = Object.keys(LIB);
  return Math.round(langs.reduce((a,l)=>a+langPercent(l),0)/langs.length);
}
function levelForPercent(pct){
  if (pct >= 90) return {name:"Expert", emoji:"🏆", num:5};
  if (pct >= 65) return {name:"Advanced", emoji:"🚀", num:4};
  if (pct >= 35) return {name:"Intermediate", emoji:"🌿", num:3};
  if (pct >= 10) return {name:"Basic", emoji:"🌾", num:2};
  return {name:"Beginner", emoji:"🌱", num:1};
}
function nextLevelGap(pct){
  const t=[10,35,65,90,101];
  for (const x of t) if (pct<x) return x-pct;
  return 0;
}
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function escapeHtml(s){ return s.replace(/[&<>]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

// ===================== PROMO GATE =====================
(function initGate(){
  const gate = document.getElementById('promoGate');
  const input = document.getElementById('gateInput');
  const btn = document.getElementById('gateBtn');
  const err = document.getElementById('gateError');

  if (!gate || !input || !btn || !err) return;

  let unlocked = false;
  try { unlocked = localStorage.getItem('codenest_promo_ok') === '1'; } catch(e) {}

  if (unlocked) {
    gate.style.display = 'none';
    return;
  }

  function tryEnter(){
    const val = String(input.value || '').trim().toUpperCase();

    if (val === 'SANJID') {
      try { localStorage.setItem('codenest_promo_ok', '1'); } catch(e) {}
      gate.style.display = 'none';
      err.textContent = '';
    } else {
      err.textContent = 'That code isn\'t valid — please check and try again.';
      input.focus();
    }
  }

  btn.addEventListener('click', tryEnter);
  input.addEventListener('keydown', e=>{
    if (e.key === 'Enter') {
      e.preventDefault();
      tryEnter();
    }
  });
})();

// ===================== NAV / VIEWS =====================
const hamBtn = document.getElementById('hamBtn');
const navDrawer = document.getElementById('navDrawer');
const navScrim = document.getElementById('navScrim');
function openNav(){ navDrawer.classList.add('show'); navScrim.classList.add('show'); hamBtn.classList.add('open'); }
function closeNav(){ navDrawer.classList.remove('show'); navScrim.classList.remove('show'); hamBtn.classList.remove('open'); }
hamBtn.addEventListener('click', ()=> navDrawer.classList.contains('show') ? closeNav() : openNav());
navScrim.addEventListener('click', closeNav);

function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('show'));
  document.getElementById('view-'+name).classList.add('show');
  document.querySelectorAll('.nav-item[data-view]').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
  document.querySelectorAll('.bottom-nav button[data-view]').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
  closeNav();
  window.scrollTo(0,0);
  if (['html','css','js','python'].includes(name)) renderLangView(name);
  if (name==='editor') setTimeout(()=>{ STATE.editor.cm && STATE.editor.cm.refresh(); },30);
  if (name==='progress') renderProgressView();
}
document.querySelectorAll('[data-view]').forEach(btn=> btn.addEventListener('click', ()=> showView(btn.dataset.view)));

// ===================== HOME =====================
function refreshChrome(){
  const op = overallPercent();
  const lvl = levelForPercent(op);
  document.getElementById('levelChip').textContent = `${lvl.emoji} Lv.${lvl.num} ${lvl.name}`;
  document.getElementById('navHtmlPct').textContent = langPercent('html')+'%';
  document.getElementById('navCssPct').textContent = langPercent('css')+'%';
  document.getElementById('navJsPct').textContent = langPercent('js')+'%';
  document.getElementById('navPyPct').textContent = langPercent('python')+'%';
  renderHome();
  if (document.getElementById('view-progress').classList.contains('show')) renderProgressView();
}
function renderHome(){
  const grid = document.getElementById('homeLangGrid');
  const descs = {html:"The structure of every web page.", css:"Style, layout, and visual polish.", js:"Make pages interactive and dynamic.", python:"A readable, general-purpose language."};
  const colors = {html:'var(--html-c)', css:'var(--css-c)', js:'var(--js-c)', python:'var(--py-c)'};
  grid.innerHTML = '';
  for (const lang of Object.keys(LIB)) {
    const pct = langPercent(lang);
    const card = el(`<button class="lang-card">
      <span class="glyph" style="background:${colors[lang]}">${LIB[lang].label}</span>
      <h3>${LIB[lang].label}</h3><p>${descs[lang]}</p>
      <div class="bar"><i style="width:${pct}%; background:${colors[lang]}"></i></div>
      <div class="bar-label">${pct}% · ${LIB[lang].topics.length} topics</div>
    </button>`);
    card.addEventListener('click', ()=> showView(lang));
    grid.appendChild(card);
  }
}

// ===================== LANGUAGE / TOPIC VIEW =====================
function buildDemoSrcdoc(demo){
  const html = demo.html||''; const css = demo.css||''; const js = demo.js||'';
  return `<!DOCTYPE html><html><head><style>body{font-family:sans-serif;margin:10px;color:#222;background:#fff}${css}</style></head><body>${html}<script>
    window.onerror=function(){return true;};
    try{ ${js} }catch(e){}
  <\/script></body></html>`;
}
function renderLangView(lang){
  const view = document.getElementById('view-'+lang);
  const topics = LIB[lang].topics;
  if (!STATE.activeTopic[lang]) STATE.activeTopic[lang] = topics[0].id;
  view.innerHTML = `
    <div class="lang-header">
      <h2>${LIB[lang].label}</h2>
      <div class="search-box"><input type="text" placeholder="Search ${LIB[lang].label} topics" id="search-${lang}"></div>
    </div>
    <div class="topic-chips" id="chips-${lang}"></div>
    <div class="topic-detail" id="detail-${lang}"></div>`;
  const chipsEl = document.getElementById(`chips-${lang}`);
  function drawChips(filter){
    chipsEl.innerHTML='';
    topics.filter(t=> !filter || t.title.toLowerCase().includes(filter.toLowerCase())).forEach(t=>{
      const st = topicStatusLabel(lang,t.id);
      const chip = el(`<button class="topic-chip ${t.id===STATE.activeTopic[lang]?'active':''}"><span class="status ${st!=='none'&&st!=='opened'?st:''}"></span>${t.title}</button>`);
      chip.addEventListener('click', ()=>{ STATE.activeTopic[lang]=t.id; renderLangView(lang); });
      chipsEl.appendChild(chip);
    });
  }
  drawChips('');
  document.getElementById(`search-${lang}`).addEventListener('input', e=> drawChips(e.target.value));
  const topic = topics.find(t=>t.id===STATE.activeTopic[lang]);
  setTopicState(lang, topic.id, { opened:true });
  drawTopicDetail(lang, topic);
  refreshChrome();
}
function drawTopicDetail(lang, t){
  const detail = document.getElementById(`detail-${lang}`);
  const s = topicState(lang, t.id);
  detail.innerHTML = `
    <div class="topic-card">
      <h3>${t.title}</h3>
      <div class="subtitle">${t.subtitle}</div>
      <div class="block"><h4>Code</h4>
        <div class="code-box">
          <pre>${escapeHtml(t.code)}</pre>
          <div class="code-actions">
            <button class="copy-btn" data-act="copy">⧉ Copy</button>
            ${t.demo ? `<button class="run-btn" data-act="run">▶ Run demo</button>` : ''}
          </div>
        </div>
      </div>
      <div class="block"><h4>What it does</h4><p>${t.what}</p></div>
      <div class="block"><h4>How it works</h4><p>${t.how}</p></div>
      <div class="block"><h4>Where to use it</h4><p>${t.where}</p></div>
      ${t.demo ? `
      <div class="block"><h4>Demo — live result</h4>
        <div class="demo-frame-wrap">
          <div class="demo-label">Rendered live in a sandboxed frame — not a screenshot</div>
          <iframe id="frame-${lang}-${t.id}" sandbox="allow-scripts"></iframe>
        </div>
      </div>
      <div class="block"><h4>Demo explanation</h4><p>What you're seeing above is this exact code, rendered live. ${t.demo.js? 'Any console output from it appears inside that frame\'s own console, not this page\'s.':''} The result changes only if you edit the code shown above (in the Manual Coding Workspace, not here).</p></div>` : `
      <div class="limit-note">This concept doesn't produce a visual browser demo (e.g. it's about file structure or organization, not rendered output) — that's why no demo is shown here, rather than faking one.</div>`}
      ${t.pyOutput ? `
      <div class="block"><h4>Output when run</h4><div class="py-output">${t.pyOutput}</div></div>
      <div class="block"><h4>Demo explanation</h4><p>Python can't safely execute arbitrary code inside a browser tab, so this is the honest, verified output of running this exact snippet with a real Python interpreter — not a live in-browser execution.</p></div>` : ''}
      <div class="mark-row">
        <button class="mark-btn learning ${s.mark==='learning'?'active':''}" data-mark="learning">◐ Still learning</button>
        <button class="mark-btn learned ${s.mark==='learned'?'active':''}" data-mark="learned">✓ Learned this</button>
      </div>
    </div>`;
  if (t.demo) {
    const frame = document.getElementById(`frame-${lang}-${t.id}`);
    frame.srcdoc = buildDemoSrcdoc(t.demo);
  }
  const copyBtn = detail.querySelector('[data-act="copy"]');
  copyBtn.addEventListener('click', ()=>{
    navigator.clipboard && navigator.clipboard.writeText(t.code).catch(()=>{});
    const old = copyBtn.textContent; copyBtn.textContent='✓ Copied';
    setTimeout(()=> copyBtn.textContent = old, 1200);
    setTopicState(lang, t.id, { copied:true });
    refreshChrome();
  });
  const runBtn = detail.querySelector('[data-act="run"]');
  if (runBtn) runBtn.addEventListener('click', ()=>{
    const frame = document.getElementById(`frame-${lang}-${t.id}`);
    frame.srcdoc = buildDemoSrcdoc(t.demo);
    setTopicState(lang, t.id, { ran:true });
    refreshChrome();
    Bird.reactFixed();
  });
  detail.querySelectorAll('.mark-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
      const mark = this.dataset.mark;
      const cur = topicState(lang,t.id).mark;
      setTopicState(lang, t.id, { mark: cur===mark? null : mark });
      refreshChrome();
      renderLangView(lang);
      if (cur !== mark && mark==='learned') Bird.reactLearned();
      else if (cur !== mark && mark==='learning') Bird.reactEncourage();
    });
  });
}

// ===================== AUTOCOMPLETE DATA (with explanations) =====================
const HTML_TAGS = {
  h1:"Top-level heading",h2:"Section heading",h3:"Sub-section heading",h4:"Minor heading",h5:"Minor heading",h6:"Smallest heading",
  p:"Paragraph of text", a:"Link to another page or section", img:"Embeds an image (void — no closing tag)",
  div:"Generic block container", span:"Generic inline container", button:"Clickable action control",
  input:"Form input field (void — no closing tag)", form:"Wraps input controls for submission",
  ul:"Unordered (bulleted) list", ol:"Ordered (numbered) list", li:"One list item",
  table:"Table of rows/columns", tr:"Table row", td:"Table data cell", th:"Table header cell",
  section:"A thematic section of content", header:"Introductory/header content", footer:"Footer content",
  nav:"Navigation links block", article:"Self-contained, distributable content", label:"Text tied to a form control",
  select:"Dropdown of options", option:"One dropdown choice", textarea:"Multi-line text input",
  fieldset:"Groups related form fields", legend:"Caption for a fieldset", audio:"Embeds sound (add controls attribute)",
  video:"Embeds video (add controls attribute)", iframe:"Embeds another web page", br:"Line break (void — no closing tag)",
  hr:"Horizontal rule (void — no closing tag)", meta:"Page metadata (void — no closing tag)", link:"Links a resource like a stylesheet (void)",
  style:"Embedded CSS block", script:"Embedded/linked JavaScript",
};
const HTML_ATTRS = {
  a:["href — link destination URL","target — where to open (e.g. _blank)","rel — relationship (e.g. noopener)"],
  img:["src — image file/URL","alt — text description for accessibility","width — display width","height — display height"],
  input:["type — kind of input (text, email, checkbox...)","placeholder — hint text","value — current value","name — field name"],
  button:["type — button, submit, or reset","disabled — greys out and disables the button"],
  form:["action — where to send data","method — GET or POST"],
  default:["id — unique identifier","class — style/JS hook (shared)","style — inline CSS","data-* — custom data attribute"],
};
const CSS_PROPS = {
  color:"Text color", background:"Shorthand background (color/image/etc.)", "background-color":"Solid background color",
  "background-image":"Background image or gradient", "background-size":"Scales a background image",
  display:"How the element is laid out (block, flex, grid, none...)", position:"static, relative, absolute, fixed, sticky",
  width:"Element width", height:"Element height", margin:"Space outside the element", padding:"Space inside the element",
  border:"Shorthand border (width/style/color)", "border-radius":"Rounds the corners", "box-shadow":"Drop shadow",
  "font-size":"Text size", "font-family":"Typeface", "font-weight":"Text boldness", "line-height":"Space between lines",
  "text-align":"Horizontal text alignment", overflow:"What happens to content too big for its box",
  opacity:"Transparency (0 to 1)", "z-index":"Stacking order for positioned elements",
  flex:"Shorthand flex-grow/shrink/basis","justify-content":"Main-axis alignment in flex/grid",
  "align-items":"Cross-axis alignment in flex/grid","grid-template-columns":"Defines grid column tracks",
  gap:"Space between flex/grid items", transition:"Animates property changes smoothly", transform:"Move/rotate/scale/skew visually",
  animation:"Runs a @keyframes animation", cursor:"Mouse cursor style on hover",
};
const CSS_VALUES = {
  display:["block","inline","inline-block","flex","grid","none"],
  position:["static","relative","absolute","fixed","sticky"],
  "text-align":["left","center","right","justify"],
  overflow:["visible","hidden","scroll","auto"],
  cursor:["pointer","default","not-allowed","text"],
};
const JS_KEYWORDS = {
  const:"Declares a variable that can't be reassigned", let:"Declares a variable that can be reassigned",
  var:"Old-style variable declaration (avoid)", function:"Declares a named function", "return":"Sends a value back from a function",
  if:"Runs code conditionally", "else":"Alternative branch for if", "for":"Loop a fixed number of times",
  "while":"Loop while a condition is true", "class":"Defines a blueprint for objects", "new":"Creates an instance of a class",
  "try":"Attempts code that might fail", "catch":"Handles an error from try", async:"Marks a function as asynchronous",
  await:"Pauses until a Promise resolves", console:"Access console.log/warn/error for debugging",
  document:"Access to the page's DOM", "true":"Boolean true value", "false":"Boolean false value", "null":"Explicit empty value",
};
const JS_METHODS = {
  log:"Print to the console", map:"Transform every array item into a new array", filter:"Keep items passing a test",
  forEach:"Run a function for every item", addEventListener:"Run code when an event happens", querySelector:"Find the first matching element",
  querySelectorAll:"Find all matching elements", getElementById:"Find an element by its id", parse:"Parse a JSON string into an object",
  stringify:"Convert an object into a JSON string", getItem:"Read a stored localStorage value", setItem:"Write a localStorage value",
};
const PY_KEYWORDS = {
  print:"Displays output", "def":"Defines a function", "return":"Sends a value back from a function",
  "if":"Runs code conditionally", "elif":"Additional condition after if", "else":"Fallback branch",
  "for":"Loop over a sequence", "while":"Loop while a condition is true", "class":"Defines a blueprint for objects",
  "import":"Brings in a module", "try":"Attempts code that might fail", "except":"Handles an error from try",
  "lambda":"Creates a small anonymous function", "True":"Boolean true value", "False":"Boolean false value", "None":"Represents no value",
  range:"Generates a sequence of numbers", len:"Returns the length of a sequence", "in":"Checks membership / iterates a sequence",
};
const PY_BUILTINS = { str:"Convert to text", int:"Convert to a whole number", float:"Convert to a decimal number",
  list:"Convert to a list", dict:"Create a dictionary", enumerate:"Loop with index and value together", sorted:"Return a sorted list",
  zip:"Pair up multiple sequences", map:"Apply a function to every item", filter:"Keep items passing a test" };

function makeHintItem(text, desc, displayOverride){
  return { text, displayText: displayOverride||text, render:function(el, self, data){
    el.innerHTML = `<span>${data.displayText}</span><span class="hint-desc">${desc||''}</span>`;
  }};
}

function htmlHintFn(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line).slice(0, cur.ch);
  const tagOpenMatch = line.match(/<([a-zA-Z]*)$/);
  const attrMatch = line.match(/<([a-zA-Z0-9]+)\s+[a-zA-Z-]*$/);
  if (attrMatch) {
    const tag = attrMatch[1].toLowerCase();
    const wordMatch = line.match(/([a-zA-Z-]*)$/);
    const prefix = wordMatch[1].toLowerCase();
    const list = (HTML_ATTRS[tag]||HTML_ATTRS.default).map(s=>{ const [name,desc]=s.split(' — '); return {name,desc}; })
      .filter(a=>a.name.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(a=>makeHintItem(a.name, a.desc)), from, to: cur };
  }
  if (tagOpenMatch) {
    const prefix = tagOpenMatch[1].toLowerCase();
    const matches = Object.keys(HTML_TAGS).filter(tag=> tag.startsWith(prefix));
    if (!matches.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: matches.map(tag=> makeHintItem(tag+'>', HTML_TAGS[tag], '<'+tag+'>')), from, to: cur };
  }
  return null;
}
function cssHintFn(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line).slice(0, cur.ch);
  const valueMatch = line.match(/([a-zA-Z-]+)\s*:\s*([a-zA-Z-]*)$/);
  if (valueMatch && CSS_VALUES[valueMatch[1]]) {
    const prefix = valueMatch[2];
    const list = CSS_VALUES[valueMatch[1]].filter(v=>v.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(v=>makeHintItem(v,'value')), from, to: cur };
  }
  const propMatch = line.match(/([a-zA-Z-]+)$/);
  if (propMatch) {
    const prefix = propMatch[1];
    const list = Object.keys(CSS_PROPS).filter(p=>p.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(p=>makeHintItem(p, CSS_PROPS[p])), from, to: cur };
  }
  return null;
}
function jsHintFn(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line).slice(0, cur.ch);
  const dotMatch = line.match(/\.([a-zA-Z]*)$/);
  if (dotMatch) {
    const prefix = dotMatch[1];
    const list = Object.keys(JS_METHODS).filter(m=>m.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(m=>makeHintItem(m, JS_METHODS[m])), from, to: cur };
  }
  const wordMatch = line.match(/([a-zA-Z_]+)$/);
  if (wordMatch) {
    const prefix = wordMatch[1];
    const list = Object.keys(JS_KEYWORDS).filter(k=>k.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(k=>makeHintItem(k, JS_KEYWORDS[k])), from, to: cur };
  }
  return null;
}
function pyHintFn(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line).slice(0, cur.ch);
  const wordMatch = line.match(/([a-zA-Z_]+)$/);
  if (wordMatch) {
    const prefix = wordMatch[1];
    const all = Object.assign({}, PY_KEYWORDS, PY_BUILTINS);
    const list = Object.keys(all).filter(k=>k.startsWith(prefix));
    if (!list.length) return null;
    const from = CodeMirror.Pos(cur.line, cur.ch-prefix.length);
    return { list: list.map(k=>makeHintItem(k, all[k])), from, to: cur };
  }
  return null;
}
const HINTERS = { html: htmlHintFn, css: cssHintFn, js: jsHintFn, python: pyHintFn };

// ===================== EDITOR =====================
const cmHost = document.getElementById('cmHost');
const modeFor = { html:'htmlmixed', css:'css', js:'javascript', python:'python' };
STATE.editor.cm = CodeMirror.fromTextArea(cmHost, {
  mode: modeFor.html, theme:'material-darker', lineNumbers:true,
  autoCloseBrackets:true, autoCloseTags:true, indentUnit:2, tabSize:2,
  extraKeys: {"Ctrl-Space":"autocomplete"}
});
STATE.editor.cm.setValue(STATE.editor.code.html);

let renderDebounce, hintDebounce;
STATE.editor.cm.on('inputRead', (cm, change)=>{
  clearTimeout(hintDebounce);
  if (!change.text || !change.text[0] || !/[a-zA-Z<:\.]/.test(change.text[0])) return;
  hintDebounce = setTimeout(()=>{
    const fn = HINTERS[STATE.editor.lang];
    if (!fn) return;
    try{
      CodeMirror.showHint(STATE.editor.cm, fn, { completeSingle:false, alignWithWord:true });
    }catch(e){}
  }, 120);
});
STATE.editor.cm.on('change', ()=>{
  STATE.editor.code[STATE.editor.lang] = STATE.editor.cm.getValue();
  saveState();
  clearTimeout(renderDebounce);
  renderDebounce = setTimeout(()=>{ runEditor(); birdWatch(); }, 350);
});

const langSelectBtns = document.querySelectorAll('#editorLangSelect button');
langSelectBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    langSelectBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    STATE.editor.lang = btn.dataset.lang;
    STATE.editor.cm.setOption('mode', modeFor[STATE.editor.lang]);
    STATE.editor.cm.setValue(STATE.editor.code[STATE.editor.lang]);
    document.getElementById('paneEditorTag').textContent = LIB[STATE.editor.lang].label;
    togglePreviewMode();
    runEditor();
  });
});
function togglePreviewMode(){
  const isPy = STATE.editor.lang === 'python';
  document.getElementById('previewBody').style.display = isPy ? 'none' : 'block';
  document.getElementById('pyConsole').style.display = isPy ? 'block' : 'none';
}
function runEditor(){
  const lang = STATE.editor.lang;
  document.getElementById('errBanner').classList.remove('show');
  if (lang === 'python') { runPythonPreview(STATE.editor.code.python); return; }
  const html = STATE.editor.code.html||''; const css = STATE.editor.code.css||''; const js = STATE.editor.code.js||'';
  const frame = document.getElementById('previewFrame');
  frame.srcdoc = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>
    window.onerror=function(msg){ parent.postMessage({__editorErr:true, msg:msg}, '*'); return true; };
    try{ ${js} }catch(e){ parent.postMessage({__editorErr:true, msg:e.message}, '*'); }
  <\/script></body></html>`;
}
window.addEventListener('message', (e)=>{
  if (e.data && e.data.__editorErr) {
    const b = document.getElementById('errBanner');
    b.textContent = 'Error: ' + e.data.msg;
    b.classList.add('show');
    Bird.reactMistake();
  }
});

// Minimal, honest Python teaching-subset runner (print/for-range/while/vars/f-strings). Not a full interpreter.
function runPythonPreview(code){
  const out = document.getElementById('pyConsole');
  const lines = code.split('\n');
  const scope = {};
  function evalExpr(expr){
    expr = expr.trim();
    try{
      let js = expr
        .replace(/f"([^"]*)"/g, (m,inner)=> '`'+inner.replace(/\{([^}]+)\}/g,'${$1}')+'`')
        .replace(/f'([^']*)'/g, (m,inner)=> '`'+inner.replace(/\{([^}]+)\}/g,'${$1}')+'`')
        .replace(/\bTrue\b/g,'true').replace(/\bFalse\b/g,'false').replace(/\bNone\b/g,'null');
      const fn = new Function(...Object.keys(scope), 'return ('+js+')');
      return fn(...Object.values(scope));
    }catch(e){ return undefined; }
  }
  let printed = []; let iterations = 0;
  function runBlock(lines, start, end){
    let i = start;
    while (i < end && iterations < 3000) {
      iterations++;
      const line = (lines[i]||'').trim();
      if (!line || line.startsWith('#')) { i++; continue; }
      const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:$/);
      const whileMatch = line.match(/^while\s+(.+):$/);
      const printMatch = line.match(/^print\((.*)\)$/);
      const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
      if (forMatch) {
        const varName = forMatch[1];
        const args = forMatch[2].split(',').map(s=>evalExpr(s));
        let start_=0, stop=0, step=1;
        if (args.length===1) stop=args[0]; else { start_=args[0]; stop=args[1]; if(args[2]!==undefined) step=args[2]; }
        let blockEnd=i+1; while (blockEnd<lines.length && (lines[blockEnd].match(/^\s+/)||lines[blockEnd].trim()==='')) blockEnd++;
        for (let v=start_; step>0? v<stop:v>stop; v+=step) { scope[varName]=v; runBlock(lines,i+1,blockEnd); }
        i=blockEnd; continue;
      }
      if (whileMatch) {
        let blockEnd=i+1; while (blockEnd<lines.length && (lines[blockEnd].match(/^\s+/)||lines[blockEnd].trim()==='')) blockEnd++;
        let guard=0; while (evalExpr(whileMatch[1]) && guard<500){ runBlock(lines,i+1,blockEnd); guard++; }
        i=blockEnd; continue;
      }
      if (printMatch) { const parts = printMatch[1].length ? printMatch[1].split(/,(?![^(]*\))/).map(p=>evalExpr(p)) : ['']; printed.push(parts.join(' ')); i++; continue; }
      if (assignMatch && !line.includes('==')) { scope[assignMatch[1]] = evalExpr(assignMatch[2]); i++; continue; }
      i++;
    }
  }
  try{
    runBlock(lines,0,lines.length);
    out.textContent = printed.length ? printed.join('\n') : '(no output — try adding a print(...) statement)';
  }catch(e){
    out.textContent = "This mini in-browser Python runner supports a simple teaching subset (print, for/range, while, variables, f-strings). It couldn't run this snippet.";
  }
}

document.getElementById('swapBtn').addEventListener('click', ()=>{
  const wrap = document.getElementById('splitWrap');
  const editorPane = document.getElementById('paneEditor');
  const previewPane = document.getElementById('panePreview');
  const resizer = document.getElementById('resizer');
  const editorFirst = wrap.firstElementChild === editorPane;
  if (editorFirst) { wrap.insertBefore(previewPane, editorPane); wrap.insertBefore(resizer, editorPane); }
  else { wrap.insertBefore(editorPane, previewPane); wrap.insertBefore(resizer, previewPane); }
  setTimeout(()=> STATE.editor.cm.refresh(), 50);
});
document.getElementById('resetBtn').addEventListener('click', ()=>{
  STATE.editor.code[STATE.editor.lang] = STARTER[STATE.editor.lang];
  STATE.editor.cm.setValue(STARTER[STATE.editor.lang]);
});
document.getElementById('copyEditorBtn').addEventListener('click', function(){
  navigator.clipboard && navigator.clipboard.writeText(STATE.editor.cm.getValue()).catch(()=>{});
  const old=this.textContent; this.textContent='✓ Copied'; setTimeout(()=>this.textContent=old,1200);
});
document.getElementById('clearBtn').addEventListener('click', ()=>{
  STATE.editor.code[STATE.editor.lang] = '';
  STATE.editor.cm.setValue('');
});
document.getElementById('runBtn').addEventListener('click', ()=>{ runEditor(); });
document.getElementById('resetSizeBtn').addEventListener('click', ()=>{
  document.getElementById('paneEditor').style.flex = '';
  document.getElementById('paneEditor').style.width = '';
  document.getElementById('paneEditor').style.height = '';
  STATE.editor.cm.refresh();
});

// Draggable resizer — works both as a row divider (mobile, stacked) and column divider (desktop, side by side)
(function(){
  const resizer = document.getElementById('resizer');
  const wrap = document.getElementById('splitWrap');
  let dragging=false;
  function isRow(){ return window.matchMedia('(min-width:760px)').matches; }
  resizer.addEventListener('mousedown', ()=>dragging=true);
  resizer.addEventListener('touchstart', ()=>dragging=true, {passive:true});
  window.addEventListener('mouseup', ()=>dragging=false);
  window.addEventListener('touchend', ()=>dragging=false);
  function move(clientX, clientY){
    if (!dragging) return;
    const rect = wrap.getBoundingClientRect();
    const firstPane = wrap.children[0];
    if (isRow()) {
      let pct = ((clientX-rect.left)/rect.width)*100;
      pct = Math.max(20, Math.min(80, pct));
      firstPane.style.width = pct+'%'; firstPane.style.flex = 'none';
    } else {
      let pct = ((clientY-rect.top)/rect.height)*100;
      pct = Math.max(20, Math.min(80, pct));
      firstPane.style.height = pct+'%'; firstPane.style.flex = 'none';
    }
    STATE.editor.cm.refresh();
  }
  window.addEventListener('mousemove', e=>move(e.clientX,e.clientY));
  window.addEventListener('touchmove', e=>{ if(e.touches[0]) move(e.touches[0].clientX,e.touches[0].clientY); }, {passive:true});
})();

// Real, simple static-analysis mistake detection — feeds the bird's reactions.
let lastIssue = null;
function birdWatch(){
  const lang = STATE.editor.lang;
  const code = STATE.editor.code[lang] || '';
  let issue = false;
  if (lang==='html') {
    const openTags = code.match(/<([a-z][a-z0-9]*)(?![^>]*\/>)[^>]*>/gi) || [];
    const closeTags = code.match(/<\/([a-z][a-z0-9]*)>/gi) || [];
    const voidTags = ['img','br','input','hr','meta','link'];
    const openCount={}, closeCount={};
    openTags.forEach(t=>{ const name=t.match(/<([a-z0-9]+)/i)[1].toLowerCase(); if(!voidTags.includes(name)) openCount[name]=(openCount[name]||0)+1; });
    closeTags.forEach(t=>{ const name=t.match(/<\/([a-z0-9]+)/i)[1].toLowerCase(); closeCount[name]=(closeCount[name]||0)+1; });
    for (const tag in openCount) if ((closeCount[tag]||0) < openCount[tag]) { issue=true; break; }
  }
  if (lang==='css') { const o=(code.match(/{/g)||[]).length, c=(code.match(/}/g)||[]).length; if(o!==c) issue=true; }
  if (lang==='js') {
    const po=(code.match(/\(/g)||[]).length, pc=(code.match(/\)/g)||[]).length;
    const bo=(code.match(/{/g)||[]).length, bc=(code.match(/}/g)||[]).length;
    if (po!==pc || bo!==bc) issue=true;
  }
  if (lang==='python') {
    code.split('\n').forEach(l=>{ if (/^(if|for|while|def|class|elif|else|try|except)\b.*[^:]$/.test(l.trim()) && l.trim().length) issue=true; });
  }
  if (issue && !lastIssue) Bird.reactMistake();
  if (!issue && lastIssue) Bird.reactFixed();
  lastIssue = issue;
}

// ===================== PROGRESS VIEW =====================
function renderProgressView(){
  const grid = document.getElementById('overallStatGrid');
  const op = overallPercent(); const lvl = levelForPercent(op);
  const colors = {html:'var(--html-c)', css:'var(--css-c)', js:'var(--js-c)', python:'var(--py-c)'};
  grid.innerHTML = `
    <div class="stat-card"><h4>Overall knowledge</h4><div class="big-num">${op}%</div><div class="bar" style="margin-top:8px"><i style="width:${op}%;background:var(--accent)"></i></div></div>
    <div class="stat-card"><h4>Level</h4><div class="big-num">${lvl.emoji} ${lvl.num}</div><p style="font-size:11.5px;color:var(--muted);margin-top:4px">${lvl.name} · ${nextLevelGap(op)>0?nextLevelGap(op)+'% to next':'top level'}</p></div>
    ${Object.keys(LIB).map(lang=>`<div class="stat-card"><h4>${LIB[lang].label}</h4><div class="big-num">${langPercent(lang)}%</div><div class="bar" style="margin-top:8px"><i style="width:${langPercent(lang)}%;background:${colors[lang]}"></i></div></div>`).join('')}
  `;
  const tables = document.getElementById('progressTables');
  tables.innerHTML = Object.keys(LIB).map(lang=>`
    <h3 style="margin-top:22px; font-size:17px;">${LIB[lang].label} topics</h3>
    <table class="topic-progress-table"><tr><th>Topic</th><th>Status</th></tr>
      ${LIB[lang].topics.map(t=>{
        const st = topicStatusLabel(lang, t.id);
        const label = {learned:'Learned',learning:'Learning',opened:'Opened',none:'Not started'}[st];
        const cls = st==='learned'?'learned':(st==='learning'?'learning':'not');
        return `<tr><td>${t.title}</td><td><span class="status-pill ${cls}">${label}</span></td></tr>`;
      }).join('')}
    </table>`).join('');
}

// ===================== BIRD PANEL =====================
window.openBirdPanel = function(){
  const scrim = document.getElementById('birdScrim');
  const body = document.getElementById('birdPanelBody');
  const op = overallPercent(); const lvl = levelForPercent(op);
  const colors = {html:'var(--html-c)', css:'var(--css-c)', js:'var(--js-c)', python:'var(--py-c)'};
  let html = `<div class="prog-line"><span>Overall</span><span>${op}%</span></div><div class="bar"><i style="width:${op}%;background:var(--accent)"></i></div>
  <p style="font-size:13px;color:var(--muted);margin-top:8px">Level ${lvl.num}: ${lvl.emoji} ${lvl.name}${nextLevelGap(op)>0?` — ${nextLevelGap(op)}% to next level`:' — top level!'}</p>`;
  for (const lang of Object.keys(LIB)) {
    const p = langPercent(lang);
    html += `<div class="prog-line"><span>${LIB[lang].label}</span><span>${p}%</span></div><div class="bar"><i style="width:${p}%;background:${colors[lang]}"></i></div>`;
  }
  body.innerHTML = html;
  scrim.classList.add('show');
};
document.getElementById('birdClose').addEventListener('click', ()=> document.getElementById('birdScrim').classList.remove('show'));
document.getElementById('birdScrim').addEventListener('click', e=>{ if(e.target.id==='birdScrim') e.target.classList.remove('show'); });

// ===================== SETTINGS VIEW =====================
function renderSettingsView(){
  const wrap = document.getElementById('settingsArea');
  wrap.innerHTML = `
    <div class="auth-card">
      <h3>Settings & support</h3>
      <div class="toggle-row">
        <div><b style="font-size:14px">Kip's voice</b><div style="font-size:12px;color:var(--muted)">Speak reactions aloud (Bangla)</div></div>
        <button class="switch ${Bird.audioEnabled?'on':''}" id="voiceSwitch"></button>
      </div>
      <div class="auth-note">
        This is a fully client-side, single-file-friendly build:<br><br>
        • <b>Promo code</b> is checked in this browser's JavaScript, which is honest but not truly secure — anyone could read the code in the page source. Real protection needs a backend that checks the code before ever sending the real content.<br><br>
        • <b>Progress, code, and settings save to this browser via localStorage</b> — they'll survive a reload on this device, but won't sync to another device without a real account system + database.<br><br>
        • <b>Kip's voice</b> uses your browser/OS's built-in text-to-speech. Whether a Bangla voice is installed — and its exact tone or gender — depends on your device, not this app; we can't guarantee a specific voice everywhere.<br><br>
        • <b>Python</b> runs through a small in-browser teaching interpreter for simple print/loop snippets. It is not a full Python engine — a real one would need a runtime like Pyodide.<br><br>
        • <b>Gmail/Facebook login has been intentionally removed</b> per your request — this build only uses the promo code.
      </div>
    </div>`;
  document.getElementById('voiceSwitch').addEventListener('click', function(){
    Bird.audioEnabled = !Bird.audioEnabled;
    this.classList.toggle('on', Bird.audioEnabled);
    saveState();
    if (Bird.audioEnabled) Bird.speak('অডিও চালু হয়েছে!');
  });
}

// ===================== INIT =====================
Bird.init();
if (SAVED.audioEnabled) { Bird.audioEnabled = true; document.getElementById('birdMute').textContent='🔊'; }
refreshChrome();
togglePreviewMode();
runEditor();
showView('home');
document.getElementById('settingsNavItem').addEventListener('click', renderSettingsView);
renderSettingsView();

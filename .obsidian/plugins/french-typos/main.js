var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugin/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FrenchTypos
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_view = require("@codemirror/view");
var import_state = require("@codemirror/state");

// locales/en.json
var en_default = {
  sourceMode: "Source mode",
  livePreview: "Live preview",
  bookPreview: "Book preview",
  bookPreviewDescription: "Enable Book preview for the current note. Turn off to return to Live preview.",
  apostrophes: "Apostrophes",
  apostrophe: "Apostrophe",
  apostropheDescription: "Activate typographic apostrophe",
  doubleApostropheQuotes: "Double apostrophes to curly quotes",
  doubleApostropheQuotesDescription: "Convert two consecutive apostrophes into \u201C or \u201D, closing an already open quote",
  quotationMarks: "French quotation marks and hard spaces",
  quotationMarksDescription: "Convert standard quotation marks",
  emDashes: "Em dashes (quadratin)",
  emDashesDescription: 'Convert "--- " into em dashes \u2014',
  enDashes: "En dashes (demi-quadratin)",
  enDashesDescription: 'Convert "-- " into en dashes \u2013',
  twoEnters: "Two Enters for one",
  twoEntersDescription: "Insert two line breaks with Enter to create a Markdown paragraph.",
  disableLinks: "Simulate Shift+Click on links",
  disableLinksDescription: "Display the URL instead of opening",
  firstLineIndent: "First line indent",
  firstLineIndentDescription: "Indent the first line of paragraphs in Live Preview and Reading view",
  emptyLines: "Empty lines",
  emptyLinesDescription: "Adjust empty line height in Live Preview. Applies immediately.",
  normal: "Normal",
  small: "Small",
  invisible: "Invisible",
  font: "Font",
  fontDescription: "Choose an installed font for Book preview. Default: system serif.",
  choose: "Choose",
  chooseFont: "Choose a font",
  systemSerif: "System serif",
  fontsUnavailable: "Installed fonts are unavailable. You can still enter a font name.",
  justifyParagraphs: "Justify paragraphs",
  noParagraphSpacing: "No space between paragraphs",
  frenchHyphenation: "French hyphenation",
  textSize: "Text size",
  highlight: "Highlight",
  highlightDescription: "Enable highlight",
  toggleHighlight: "Toggle highlight",
  color: "Color",
  colorDescription: "Shared color for highlighted spaces, tabs, dashes and cursor. Theme restores the heading color.",
  theme: "Theme",
  cursorSize: "Cursor size",
  cursorSizeDescription: "Left: standard cursor. Choose a thicker cursor for note text.",
  standard: "Standard",
  button: "Button",
  buttonDescription: "Show on/off button in status bar",
  pixels: "{value} px",
  automaticHardSpace: "Automatic hard space before : ? ! ;",
  automaticHardSpaceDescription: "Insert a non-breaking space before punctuation while typing, outside code blocks and YAML frontmatter. Convert an existing regular space without adding a duplicate.",
  automaticEllipsis: "Automatic ellipsis",
  automaticEllipsisDescription: "Convert ... to \u2026 while typing, outside code blocks and YAML frontmatter."
};

// locales/fr.json
var fr_default = {
  sourceMode: "Mode source",
  livePreview: "Aper\xE7u en direct",
  bookPreview: "Aper\xE7u livre",
  bookPreviewDescription: "Activer l\u2019aper\xE7u livre pour la note courante. D\xE9sactiver pour revenir \xE0 l\u2019aper\xE7u en direct.",
  apostrophes: "Apostrophes",
  apostrophe: "Apostrophe",
  apostropheDescription: "Activer l\u2019apostrophe typographique.",
  doubleApostropheQuotes: "Deux apostrophes pour des guillemets anglais",
  doubleApostropheQuotesDescription: "Convertir deux apostrophes cons\xE9cutives en \u201C ou \u201D, en refermant un guillemet d\xE9j\xE0 ouvert.",
  quotationMarks: "Guillemets fran\xE7ais et espaces ins\xE9cables",
  quotationMarksDescription: "Convertir les guillemets droits en guillemets fran\xE7ais.",
  emDashes: "Tirets cadratins",
  emDashesDescription: "Convertir \xAB --- \xBB suivi d\u2019une espace en tiret cadratin \u2014.",
  enDashes: "Tirets demi-cadratins",
  enDashesDescription: "Convertir \xAB -- \xBB suivi d\u2019une espace en tiret demi-cadratin \u2013.",
  twoEnters: "Deux retours \xE0 la ligne pour un",
  twoEntersDescription: "Ins\xE9rer deux sauts de ligne \xE0 chaque appui sur Entr\xE9e pour cr\xE9er un paragraphe Markdown.",
  disableLinks: "Simuler Maj + clic sur les liens",
  disableLinksDescription: "Afficher l\u2019URL du lien sans l\u2019ouvrir.",
  firstLineIndent: "Alin\xE9as",
  firstLineIndentDescription: "Indenter la premi\xE8re ligne des paragraphes en aper\xE7u en direct et en mode Lecture.",
  emptyLines: "Lignes vides",
  emptyLinesDescription: "R\xE9gler la hauteur des lignes vides en aper\xE7u en direct. Application imm\xE9diate.",
  normal: "Normales",
  small: "R\xE9duites",
  invisible: "Invisibles",
  font: "Police",
  fontDescription: "Choisir une police install\xE9e pour l\u2019aper\xE7u livre. Par d\xE9faut : police serif du syst\xE8me.",
  choose: "Choisir",
  chooseFont: "Choisir une police",
  systemSerif: "Serif du syst\xE8me",
  fontsUnavailable: "La liste des polices install\xE9es est indisponible. Vous pouvez saisir un nom de police.",
  justifyParagraphs: "Justifier les paragraphes",
  noParagraphSpacing: "Sans espace entre les paragraphes",
  frenchHyphenation: "C\xE9sure fran\xE7aise",
  textSize: "Taille du texte",
  highlight: "Mise en \xE9vidence",
  highlightDescription: "Mettre en \xE9vidence les espaces ins\xE9cables, les tabulations et les tirets.",
  toggleHighlight: "Activer ou d\xE9sactiver la mise en \xE9vidence",
  color: "Couleur",
  colorDescription: "Couleur commune aux espaces, tabulations, tirets et curseur. Le bouton Th\xE8me r\xE9tablit la couleur des titres.",
  theme: "Th\xE8me",
  cursorSize: "\xC9paisseur du curseur",
  cursorSizeDescription: "\xC0 gauche : curseur standard. Augmenter l\u2019\xE9paisseur du curseur dans le texte des notes.",
  standard: "Standard",
  button: "Bouton",
  buttonDescription: "Afficher le bouton d\u2019activation dans la barre d\u2019\xE9tat.",
  pixels: "{value} px",
  automaticHardSpace: "Espace ins\xE9cable automatique avant : ? ! ;",
  automaticHardSpaceDescription: "Ins\xE9rer une espace ins\xE9cable avant ces ponctuations pendant la saisie, hors blocs de code et frontmatter YAML. Convertir une espace normale d\xE9j\xE0 pr\xE9sente, sans doublon.",
  automaticEllipsis: "Points de suspension automatiques",
  automaticEllipsisDescription: "Convertir ... en \u2026 pendant la saisie, hors blocs de code et frontmatter YAML."
};

// plugin/i18n.ts
var messages = { en: en_default, fr: fr_default };
var locale = "en";
function setLocale(language) {
  const base = language.toLowerCase().replace(/_/g, "-").split("-")[0];
  locale = base === "fr" ? "fr" : "en";
}
function t(key, parameters = {}) {
  var _a;
  return ((_a = messages[locale][key]) != null ? _a : en_default[key]).replace(/\{(\w+)\}/g, (_match, name) => {
    const value = parameters[name];
    return typeof value === "number" ? new Intl.NumberFormat(locale).format(value) : value;
  });
}

// plugin/main.ts
var refreshHighlight = import_state.StateEffect.define();
var DEFAULT_SETTINGS = {
  apostrophe: true,
  doubleApostropheQuotes: false,
  quotationmarks: true,
  automaticHardSpace: true,
  automaticEllipsis: true,
  emdashes: true,
  endashes: true,
  twoenters: false,
  desactivatelinks: true,
  firstLineIndent: true,
  emptytlines: "small",
  highlightEnabled: true,
  highlightButton: true,
  cursorWidth: 0,
  highlightColor: "",
  bookFont: "serif",
  bookTextSize: 20,
  bookJustify: true,
  bookNoParagraphSpacing: true,
  bookIndent: true,
  bookHyphenate: true
};
function punctuationSpace(previous) {
  return previous === "\xA0" || previous === "\u202F" ? "" : "\xA0";
}
function doubleApostropheQuote(beforeCursor) {
  if (!beforeCursor.endsWith("'") && !beforeCursor.endsWith("\u2019"))
    return null;
  return beforeCursor.lastIndexOf("\u201C") > beforeCursor.lastIndexOf("\u201D") ? "\u201D" : "\u201C";
}
function noteBodyStart(text) {
  const opening = /^\uFEFF?---[ \t]*(?:\r?\n|$)/.exec(text);
  if (!opening)
    return 0;
  const closing = /^(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/m.exec(text.slice(opening[0].length));
  if (!closing)
    return text.length + 1;
  return opening[0].length + closing.index + closing[0].length + (closing[0].endsWith("\n") ? 0 : 1);
}
function imageCaption(alt, src) {
  return alt && alt !== src && alt !== src.split("/").pop() && !/^\d+(?:x\d+)?$/.test(alt) ? alt : "";
}
function updateNoteElements(element) {
  var _a, _b, _c, _d;
  let changed = false;
  const images = element.matches(".image-embed") ? [element] : Array.from(element.querySelectorAll(".image-embed"));
  for (const image of images) {
    const alt = (_b = (_a = image.getAttribute("alt")) == null ? void 0 : _a.trim()) != null ? _b : "";
    const src = (_c = image.getAttribute("src")) != null ? _c : "";
    const caption = imageCaption(alt, src);
    if (((_d = image.getAttribute("data-french-typos-caption")) != null ? _d : "") !== caption) {
      if (caption)
        image.setAttribute("data-french-typos-caption", caption);
      else
        image.removeAttribute("data-french-typos-caption");
      changed = true;
    }
  }
  const paragraphs = element.matches(".cm-line, p") ? [element] : Array.from(element.querySelectorAll(element.matches(".cm-content") ? ":scope > .cm-line" : ".cm-line, p"));
  for (const paragraph of paragraphs) {
    if (paragraph.closest("figure, figcaption, .image-embed"))
      continue;
    const excluded = !!paragraph.querySelector("hr, img:not(.cm-widgetBuffer), .image-embed, .cm-image, figure, figcaption");
    if (paragraph.classList.contains("french-typos-no-indent") !== excluded) {
      paragraph.classList.toggle("french-typos-no-indent", excluded);
      changed = true;
    }
  }
  return changed;
}
function observeIndentExclusions(element, onLayoutChange) {
  const update = () => {
    if (updateNoteElements(element))
      onLayoutChange == null ? void 0 : onLayoutChange();
  };
  const observer = new MutationObserver(update);
  observer.observe(element, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "alt", "src"] });
  update();
  return observer;
}
var FrenchTypos = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.openQuote = true;
    // Variable pour suivre l'état des guillemets
    this.bookViews = /* @__PURE__ */ new WeakSet();
    this.bookSidebars = null;
  }
  async onload() {
    setLocale((0, import_obsidian.getLanguage)());
    await this.loadSettings();
    this.updateParagraphStyles();
    this.register(() => document.body.classList.remove("french-typos-indent", "french-typos-nobr", "french-typos-small_interline"));
    (0, import_obsidian.addIcon)("french-typos", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 6-6 6 6 6m8-12-6 6 6 6"/></svg>');
    this.addSettingTab(new FrenchTyposSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (event) => {
      var _a, _b;
      const button = (_b = (_a = event.target) == null ? void 0 : _a.closest) == null ? void 0 : _b.call(_a, ".status-bar .plugin-editor-status");
      const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (!button || !view || event.button !== 0)
        return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const menu = new import_obsidian.Menu().setUseNativeMenu(false);
      const current = this.bookViews.has(view) ? "book" : view.getMode() !== "source" ? null : view.getState().source === true ? "source" : "live";
      for (const [mode, title, icon] of [
        ["book", t("bookPreview"), "book-open"],
        ["source", t("sourceMode"), "code-xml"],
        ["live", t("livePreview"), "edit-3"]
      ]) {
        menu.addItem((item) => item.setTitle(title).setIcon(icon).setChecked(current === mode).onClick(() => this.setBookMode(view, mode)));
      }
      menu.showAtMouseEvent(event);
    }, true);
    this.registerEvent(this.app.workspace.on("layout-change", () => this.updateBookViews()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.updateBookViews()));
    this.register(() => {
      this.app.workspace.iterateAllLeaves((leaf) => {
        if (leaf.view instanceof import_obsidian.MarkdownView)
          this.bookViews.delete(leaf.view);
      });
      this.updateBookViews();
    });
    this.addCommand({
      id: "Apostrophes",
      name: t("apostrophes"),
      editorCallback: (editor) => {
        this.updateApostrophes(editor);
      }
    });
    this.registerDomEvent(document, "keydown", (event) => {
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing || !activeView || activeView.getMode() !== "source" || !activeView.editor.hasFocus() || !event.composedPath().includes(activeView.contentEl)) {
        return;
      }
      const activeState = activeView.getState();
      if (activeView && activeView.getMode() === "source" && (activeState == null ? void 0 : activeState["source"]) === false) {
        const editor = activeView.editor;
        const bodyStart = noteBodyStart(editor.getValue());
        if (editor.listSelections().some(({ anchor, head }) => editor.posToOffset(anchor) < bodyStart || editor.posToOffset(head) < bodyStart))
          return;
        const cursor = editor.getCursor();
        if ((this.settings.automaticHardSpace && /^[?!:;]$/.test(event.key) || this.settings.automaticEllipsis && event.key === ".") && !event.ctrlKey && !event.metaKey && !event.altKey && !event.isComposing && !editor.getSelection()) {
          const cm = editor.cm;
          if (cm && event.target instanceof Element && event.target.closest('[contenteditable="true"]') === cm.contentDOM) {
            const node = cm.domAtPos(editor.posToOffset(cursor)).node;
            const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
            if (!(element == null ? void 0 : element.closest(".HyperMD-codeblock, .cm-inline-code"))) {
              if (event.key === ".") {
                if (cursor.ch >= 2 && editor.getRange({ line: cursor.line, ch: cursor.ch - 2 }, cursor) === "..") {
                  event.preventDefault();
                  editor.replaceRange("\u2026", { line: cursor.line, ch: cursor.ch - 2 }, cursor);
                  editor.setCursor({ line: cursor.line, ch: cursor.ch - 1 });
                }
                return;
              }
              const previous = cursor.ch ? editor.getRange({ line: cursor.line, ch: cursor.ch - 1 }, cursor) : "";
              const start = { line: cursor.line, ch: cursor.ch - (previous === " " ? 1 : 0) };
              const insertion = punctuationSpace(previous) + event.key;
              event.preventDefault();
              editor.replaceRange(insertion, start, cursor);
              editor.setCursor({ line: start.line, ch: start.ch + insertion.length });
              return;
            }
          }
        }
        const quote = (event.key === "'" || event.key === "\u2019") && this.settings.doubleApostropheQuotes && !editor.getSelection() ? doubleApostropheQuote(editor.getRange(editor.offsetToPos(bodyStart), cursor)) : null;
        if (quote) {
          event.preventDefault();
          editor.replaceRange(quote, { line: cursor.line, ch: cursor.ch - 1 }, cursor);
          editor.setCursor(cursor);
        } else if (event.key === "'" && this.settings.apostrophe) {
          event.preventDefault();
          const selection = editor.getSelection();
          if (selection.length > 0) {
            editor.replaceSelection("\u2019");
          } else {
            editor.replaceRange("\u2019", cursor);
            editor.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
          }
        } else if (event.key === '"' && this.settings.quotationmarks) {
          event.preventDefault();
          if (this.openQuote) {
            editor.replaceRange("\xAB\xA0", cursor);
          } else {
            editor.replaceRange("\xA0\xBB", cursor);
          }
          editor.setCursor({ line: cursor.line, ch: cursor.ch + 2 });
          this.openQuote = !this.openQuote;
        } else if (event.key === " " && editor.getRange({ line: cursor.line, ch: cursor.ch - 3 }, cursor) === "---" && this.settings.emdashes) {
          event.preventDefault();
          editor.replaceRange("\u2014\xA0", { line: cursor.line, ch: cursor.ch - 3 }, { line: cursor.line, ch: cursor.ch });
        } else if (event.key === " " && editor.getRange({ line: cursor.line, ch: cursor.ch - 2 }, cursor) === "--" && this.settings.emdashes) {
          event.preventDefault();
          editor.replaceRange("\u2013\xA0", { line: cursor.line, ch: cursor.ch - 2 }, { line: cursor.line, ch: cursor.ch });
        } else if (event.key === "Enter" && this.settings.twoenters) {
          event.preventDefault();
          editor.replaceRange("\n\n", cursor);
          editor.setCursor({ line: cursor.line + 2, ch: cursor.ch });
        }
      }
    }, true);
    this.registerDomEvent(document, "click", (event) => {
      var _a, _b;
      const target = event.target;
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (!activeView)
        return;
      const mode = activeView == null ? void 0 : activeView.getMode();
      if (mode == "source" || mode == "preview")
        return;
      const editorEl = activeView.containerEl.querySelector(".cm-editor");
      if (editorEl && !editorEl.contains(target)) {
        return;
      }
      const parent = target.parentNode;
      const ancertor = parent.parentNode;
      const activeState = this.app.workspace.getLeaf().getViewState().state;
      if (activeView && activeView.getMode() === "source" && (activeState == null ? void 0 : activeState["source"]) === false && parent.classList.contains("cm-link") && this.settings.desactivatelinks) {
        event.preventDefault();
        event.stopPropagation();
        const editor = activeView.editor;
        const linktext = (_a = target.textContent) != null ? _a : "";
        const longtext = (_b = ancertor == null ? void 0 : ancertor.textContent) != null ? _b : "";
        this.MoveCursor(editor, longtext, linktext);
      }
    }, true);
    document.body.classList.add("french-typos-highlight");
    this.registerEditorExtension(this.createDecorations());
    this.registerEditorExtension(this.createCursorStyle());
    this.registerEditorExtension(import_view.EditorView.contentAttributes.of((view) => {
      const info = view.state.field(import_obsidian.editorInfoField, false);
      if (!(info instanceof import_obsidian.MarkdownView))
        return {};
      return this.bookViews.has(info) && this.settings.bookHyphenate ? { class: "french-typos-note-content", lang: "fr" } : { class: "french-typos-note-content" };
    }));
    this.registerEditorExtension(this.createIndentExclusions());
    this.registerMarkdownPostProcessor((element, context) => {
      const observer = observeIndentExclusions(element);
      const child = new import_obsidian.MarkdownRenderChild(element);
      child.register(() => observer.disconnect());
      context.addChild(child);
    });
    this.updateStatusBarButton();
  }
  updateApostrophes(editor) {
    const cursor = editor.getCursor();
    const text = editor.getValue();
    const bodyStart = noteBodyStart(text);
    const updatedText = text.slice(0, bodyStart) + text.slice(bodyStart).replace(/'/g, "\u2019");
    editor.setValue(updatedText);
    editor.setCursor(cursor);
  }
  MoveCursor(editor, longtext, linktext) {
    const markdownContent = editor.getValue();
    const lines = markdownContent.split("\n");
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const nolink = this.noLinks(lines[lineIndex]);
      const lIndex = nolink.indexOf(this.noLinks(longtext));
      if (lIndex !== -1) {
        const search = "[" + linktext + "]";
        let localIndex = lines[lineIndex].indexOf(search);
        if (localIndex !== -1) {
          const coords = { line: lineIndex, ch: localIndex };
          editor.setCursor(coords);
        }
      }
    }
  }
  noLinks(makdown) {
    return makdown.replace(/\[(.*?)\]\(.*?\)/g, "$1");
  }
  async loadSettings() {
    var _a;
    const data = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS };
    if (typeof data !== "object" || data === null)
      return;
    for (const key of Object.keys(DEFAULT_SETTINGS)) {
      const saved = data;
      const value = key === "highlightColor" ? (_a = saved.highlightColor) != null ? _a : saved.cursorColor : saved[key];
      if (key === "emptytlines") {
        if (value === "normal" || value === "small" || value === "invisible") {
          this.settings.emptytlines = value;
        }
      } else if (key === "cursorWidth") {
        if (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 6)
          this.settings.cursorWidth = value;
      } else if (key === "highlightColor") {
        if (typeof value === "string" && (value === "" || /^#[0-9a-f]{6}$/i.test(value)))
          this.settings.highlightColor = value;
      } else if (key === "bookFont") {
        if (typeof value === "string" && value.length <= 100 && !/[\r\n]/.test(value))
          this.settings.bookFont = value.trim() || "serif";
      } else if (key === "bookTextSize") {
        if (typeof value === "number" && Number.isInteger(value) && value >= 12 && value <= 40)
          this.settings.bookTextSize = value;
      } else if (typeof value === "boolean") {
        this.settings[key] = value;
      }
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.updateParagraphStyles();
    this.updateStatusBarButton();
    this.updateBookViews();
    this.refreshDecorations();
  }
  updateParagraphStyles() {
    document.body.classList.toggle("french-typos-indent", this.settings.firstLineIndent);
    document.body.classList.toggle("french-typos-nobr", this.settings.emptytlines === "invisible");
    document.body.classList.toggle("french-typos-small_interline", this.settings.emptytlines === "small");
  }
  bookStyleProperties() {
    const font = this.settings.bookFont || "serif";
    return {
      "--french-typos-book-font": ["serif", "sans-serif", "monospace", "system-ui"].includes(font) ? font : JSON.stringify(font),
      "--french-typos-book-size": `${this.settings.bookTextSize}px`,
      "--french-typos-book-align": this.settings.bookJustify ? "justify" : "start",
      "--french-typos-book-gap": this.settings.bookNoParagraphSpacing ? "none" : "block",
      "--french-typos-book-indent": this.settings.bookIndent ? "2rem" : "0px",
      "--french-typos-book-hyphens": this.settings.bookHyphenate ? "auto" : "manual"
    };
  }
  async bookFontChoices() {
    var _a;
    const fonts = /* @__PURE__ */ new Set(["serif"]);
    const addFont = (font) => {
      if (typeof font === "string" && font.trim() && font.length <= 100 && !/[\r\n]/.test(font))
        fonts.add(font.trim());
    };
    addFont(this.settings.bookFont);
    document.fonts.forEach((font) => addFont(font.family.replace(/^["']|["']$/g, "")));
    try {
      const host = window;
      const api = (_a = host.require) == null ? void 0 : _a.call(host, "get-fonts");
      if (typeof (api == null ? void 0 : api.getFonts) !== "function")
        throw new Error("System font access is unavailable");
      const installed = await api.getFonts();
      if (!Array.isArray(installed))
        throw new Error("Invalid system font list");
      for (const font of installed)
        addFont(font);
    } catch (error) {
      console.error("French Typos: could not list system fonts", error);
      new import_obsidian.Notice(t("fontsUnavailable"));
    }
    return ["serif", ...Array.from(fonts).filter((font) => font && font !== "serif").sort((a, b) => a.localeCompare(b))];
  }
  async setBookMode(view, mode) {
    const selections = view.editor.listSelections();
    const scroll = view.editor.getScrollInfo();
    await view.leaf.setViewState({ type: "markdown", state: { ...view.getState(), mode: "source", source: mode === "source" } });
    this.bookViews.delete(view);
    if (mode === "book")
      this.bookViews.add(view);
    this.updateBookViews();
    this.refreshDecorations();
    view.editor.setSelections(selections);
    view.editor.scrollTo(scroll.left, scroll.top);
    view.editor.focus();
  }
  updateBookViews() {
    var _a, _b;
    this.app.workspace.iterateAllLeaves((leaf) => {
      var _a2, _b2;
      if (!(leaf.view instanceof import_obsidian.MarkdownView))
        return;
      const view = leaf.view;
      if (view.getMode() !== "source" || view.getState().source === true)
        this.bookViews.delete(view);
      const root = view.containerEl;
      const active = this.bookViews.has(view);
      const wasActive = root.classList.contains("french-typos-book-preview");
      if (active && !wasActive) {
        const scroller = root.querySelector(".cm-scroller");
        const style = (_a2 = scroller == null ? void 0 : scroller.ownerDocument.defaultView) == null ? void 0 : _a2.getComputedStyle(scroller);
        if (style) {
          root.style.setProperty("--french-typos-book-original-font", style.fontFamily);
          root.style.setProperty("--french-typos-book-original-size", style.fontSize);
          root.style.setProperty("--french-typos-book-original-height", style.lineHeight);
        }
      }
      root.classList.toggle("french-typos-book-preview", active);
      for (const [property, value] of Object.entries(this.bookStyleProperties())) {
        if (active)
          root.style.setProperty(property, value);
        else
          root.style.removeProperty(property);
      }
      if (!active) {
        for (const property of ["font", "size", "height"])
          root.style.removeProperty(`--french-typos-book-original-${property}`);
      }
      if (active || wasActive)
        (_b2 = view.editor.cm) == null ? void 0 : _b2.requestMeasure();
    });
    const button = document.querySelector(".status-bar .plugin-editor-status");
    const current = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    this.updateBookSidebars(!!current && this.bookViews.has(current));
    if (button && current && this.bookViews.has(current)) {
      if (!button.hasAttribute("data-french-typos-label"))
        button.setAttribute("data-french-typos-label", (_a = button.getAttribute("aria-label")) != null ? _a : "");
      button.setAttribute("aria-label", t("bookPreview"));
    } else if (button == null ? void 0 : button.hasAttribute("data-french-typos-label")) {
      if (button.getAttribute("aria-label") === t("bookPreview"))
        button.setAttribute("aria-label", (_b = button.getAttribute("data-french-typos-label")) != null ? _b : "");
      button.removeAttribute("data-french-typos-label");
    }
  }
  updateBookSidebars(active) {
    const { leftSplit, rightSplit } = this.app.workspace;
    if (active && !this.bookSidebars) {
      this.bookSidebars = { leftCollapsed: leftSplit.collapsed, rightCollapsed: rightSplit.collapsed };
      leftSplit.collapse();
      rightSplit.collapse();
    } else if (!active && this.bookSidebars) {
      const saved = this.bookSidebars;
      this.bookSidebars = null;
      if (saved.leftCollapsed)
        leftSplit.collapse();
      else
        leftSplit.expand();
      if (saved.rightCollapsed)
        rightSplit.collapse();
      else
        rightSplit.expand();
    }
  }
  cursorAttributes(view) {
    if (!(view.state.field(import_obsidian.editorInfoField, false) instanceof import_obsidian.MarkdownView))
      return {};
    const style = `--french-typos-highlight-color: ${this.settings.highlightColor || "var(--h1-color, var(--text-normal))"};`;
    const bodyStart = noteBodyStart(view.state.doc.toString());
    if (!this.settings.cursorWidth || view.state.selection.ranges.some((range) => !range.empty || range.from < bodyStart))
      return { style };
    return {
      class: "french-typos-bold-cursor",
      style: `${style} --french-typos-cursor-width: ${this.settings.cursorWidth}px;`
    };
  }
  createCursorStyle() {
    const attributes = (view) => this.cursorAttributes(view);
    const compartment = new import_state.Compartment();
    const standard = [];
    const drawing = (0, import_view.drawSelection)();
    return [compartment.of(standard), import_view.EditorView.editorAttributes.of(attributes), import_view.ViewPlugin.fromClass(class {
      constructor(view) {
        this.destroyed = false;
        this.sync(view);
      }
      update(update) {
        this.sync(update.view);
      }
      sync(view) {
        if (compartment.get(view.state) === (attributes(view).class ? drawing : standard))
          return;
        queueMicrotask(() => {
          if (this.destroyed)
            return;
          const desired = attributes(view).class ? drawing : standard;
          if (compartment.get(view.state) !== desired)
            view.dispatch({ effects: compartment.reconfigure(desired) });
        });
      }
      destroy() {
        this.destroyed = true;
      }
    })];
  }
  createIndentExclusions() {
    return import_view.ViewPlugin.fromClass(class {
      constructor(view) {
        if (view.state.field(import_obsidian.editorInfoField, false) instanceof import_obsidian.MarkdownView) {
          this.observer = observeIndentExclusions(view.contentDOM, () => view.requestMeasure());
        }
      }
      destroy() {
        var _a;
        (_a = this.observer) == null ? void 0 : _a.disconnect();
      }
    });
  }
  // Highlighting zone
  createDecorations() {
    const invisibleCharDecoration = import_view.Decoration.mark({ class: "invisible-char" });
    const tabDecoration = import_view.Decoration.mark({ class: "french-typos-tab-char" });
    const emDashDecoration = import_view.Decoration.mark({ class: "em-dash-char" });
    const enDashDecoration = import_view.Decoration.mark({ class: "en-dash-char" });
    const emptyLineDecoration = import_view.Decoration.line({ class: "french-typos-empty-line" });
    const mediaLineDecoration = import_view.Decoration.line({ class: "french-typos-media-line" });
    const frontmatterDecoration = import_view.Decoration.line({ class: "french-typos-frontmatter" });
    const highlightEnabled = () => this.settings.highlightEnabled;
    return import_view.ViewPlugin.fromClass(class {
      constructor(view) {
        this.decorations = this.buildDecorations(view);
      }
      update(update) {
        if (update.docChanged || update.transactions.some((transaction) => transaction.effects.some((effect) => effect.is(refreshHighlight)))) {
          this.decorations = this.buildDecorations(update.view);
        }
      }
      buildDecorations(view) {
        if (!(view.state.field(import_obsidian.editorInfoField, false) instanceof import_obsidian.MarkdownView))
          return import_view.Decoration.none;
        const builder = new import_state.RangeSetBuilder();
        const enabled = highlightEnabled();
        const bodyStart = noteBodyStart(view.state.doc.toString());
        for (let number = 1; number <= view.state.doc.lines; number++) {
          const line = view.state.doc.line(number);
          if (line.from < bodyStart) {
            builder.add(line.from, line.from, frontmatterDecoration);
            continue;
          }
          if (line.length === 0)
            builder.add(line.from, line.from, emptyLineDecoration);
          if (line.text.includes("!["))
            builder.add(line.from, line.from, mediaLineDecoration);
          if (!enabled)
            continue;
          for (let i = 0; i < line.length; i++) {
            const position = line.from + i;
            if (line.text[i] === "\xA0")
              builder.add(position, position + 1, invisibleCharDecoration);
            if (line.text[i] === "	")
              builder.add(position, position + 1, tabDecoration);
            if (line.text[i] === "\u2014")
              builder.add(position, position + 1, emDashDecoration);
            if (line.text[i] === "\u2013")
              builder.add(position, position + 1, enDashDecoration);
          }
        }
        return builder.finish();
      }
    }, {
      decorations: (value) => value.decorations
    });
  }
  addStatusBarButton() {
    if (!this.settings.highlightButton)
      return;
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.id = "highlight-status-bar-button";
    statusBarItemEl.addClass("mod-clickable");
    statusBarItemEl.createSpan({ cls: "status-bar-item-icon", text: "\xB6" });
    statusBarItemEl.setAttribute("aria-label", t("toggleHighlight"));
    statusBarItemEl.setAttribute("data-tooltip-position", "top");
    const updateAppearance = () => {
      statusBarItemEl.toggleClass("highlight-enabled", this.settings.highlightEnabled);
    };
    updateAppearance();
    statusBarItemEl.onClickEvent(() => {
      this.toggleHighlight();
      updateAppearance();
    });
  }
  updateStatusBarButton() {
    const existingButton = document.getElementById("highlight-status-bar-button");
    if (this.settings.highlightButton) {
      if (!existingButton) {
        this.addStatusBarButton();
      }
    } else {
      if (existingButton) {
        existingButton.remove();
      }
    }
  }
  toggleHighlight() {
    this.settings.highlightEnabled = !this.settings.highlightEnabled;
    void this.saveSettings();
    this.refreshDecorations();
  }
  refreshDecorations() {
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof import_obsidian.MarkdownView && leaf.view.editor) {
        const editorView = leaf.view.editor.cm;
        if (editorView) {
          editorView.dispatch({
            effects: refreshHighlight.of(null)
          });
        }
      }
    });
  }
  hardspaces(content) {
    const htmlRegex = /<[^>]*>/g;
    const yamlRegex = /---[\s\S]+?---/g;
    let htmlMatches = content.match(htmlRegex) || [];
    let yamlMatches = content.match(yamlRegex) || [];
    content = content.replace(htmlRegex, "HTML_PLACEHOLDER");
    content = content.replace(yamlRegex, "YAML_PLACEHOLDER");
    let regex = /(.)([:;?!»])/g;
    content = content.replace(regex, (match, p1, p2) => {
      if (p1 === " " || p1 === "\xA0") {
        return "\xA0" + p2;
      }
      return p1 + "\xA0" + p2;
    });
    regex = /([«—])(.)?/g;
    content = content.replace(regex, (match, p1, p2) => {
      if (p2 === " " || p2 === "\xA0") {
        return p1 + "\xA0";
      }
      return p1 + "\xA0" + p2;
    });
    htmlMatches.forEach((placeholder) => {
      content = content.replace("HTML_PLACEHOLDER", placeholder);
    });
    yamlMatches.forEach((placeholder) => {
      content = content.replace("YAML_PLACEHOLDER", placeholder);
    });
    content = content.replace("]\xA0:", "]:");
    return content;
  }
};
var BookFontModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app, fonts, choose) {
    super(app);
    this.fonts = fonts;
    this.choose = choose;
    this.setPlaceholder(t("chooseFont"));
  }
  getItems() {
    return this.fonts;
  }
  getItemText(font) {
    return font === "serif" ? t("systemSerif") : font;
  }
  onChooseItem(font) {
    void this.choose(font);
  }
};
var FrenchTyposSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.icon = "french-typos";
    this.plugin = plugin;
  }
  async setControlValue(key, value) {
    await super.setControlValue(key, value);
    this.plugin.updateParagraphStyles();
    this.plugin.updateBookViews();
    this.plugin.refreshDecorations();
  }
  getSettingDefinitions() {
    return [
      {
        type: "group",
        heading: t("livePreview"),
        items: [
          {
            name: t("apostrophe"),
            desc: t("apostropheDescription"),
            control: { type: "toggle", key: "apostrophe" }
          },
          {
            name: t("doubleApostropheQuotes"),
            desc: t("doubleApostropheQuotesDescription"),
            control: { type: "toggle", key: "doubleApostropheQuotes" }
          },
          {
            name: t("quotationMarks"),
            desc: t("quotationMarksDescription"),
            control: { type: "toggle", key: "quotationmarks" }
          },
          {
            name: t("automaticHardSpace"),
            desc: t("automaticHardSpaceDescription"),
            control: { type: "toggle", key: "automaticHardSpace" }
          },
          {
            name: t("automaticEllipsis"),
            desc: t("automaticEllipsisDescription"),
            control: { type: "toggle", key: "automaticEllipsis" }
          },
          {
            name: t("emDashes"),
            desc: t("emDashesDescription"),
            control: { type: "toggle", key: "emdashes" }
          },
          {
            name: t("enDashes"),
            desc: t("enDashesDescription"),
            control: { type: "toggle", key: "endashes" }
          },
          {
            name: t("twoEnters"),
            desc: t("twoEntersDescription"),
            control: { type: "toggle", key: "twoenters" }
          },
          {
            name: t("disableLinks"),
            desc: t("disableLinksDescription"),
            control: { type: "toggle", key: "desactivatelinks" }
          },
          {
            name: t("firstLineIndent"),
            desc: t("firstLineIndentDescription"),
            render: (setting) => {
              setting.addToggle((toggle) => toggle.setValue(this.plugin.settings.firstLineIndent).onChange(async (value) => {
                this.plugin.settings.firstLineIndent = value;
                await this.plugin.saveSettings();
              }));
            }
          },
          {
            name: t("emptyLines"),
            desc: t("emptyLinesDescription"),
            control: {
              type: "dropdown",
              key: "emptytlines",
              options: { normal: t("normal"), small: t("small"), invisible: t("invisible") }
            }
          }
        ]
      },
      {
        type: "group",
        heading: t("bookPreview"),
        items: [
          {
            name: t("bookPreview"),
            desc: t("bookPreviewDescription"),
            render: (setting) => {
              var _a;
              const view = (_a = this.app.workspace.getMostRecentLeaf()) == null ? void 0 : _a.view;
              setting.addToggle((toggle) => toggle.setValue(view instanceof import_obsidian.MarkdownView && view.containerEl.classList.contains("french-typos-book-preview")).setDisabled(!(view instanceof import_obsidian.MarkdownView)).onChange(async (value) => {
                if (view instanceof import_obsidian.MarkdownView)
                  await this.plugin.setBookMode(view, value ? "book" : "live");
              }));
            }
          },
          {
            name: t("font"),
            desc: t("fontDescription"),
            render: (setting) => {
              setting.addText((text) => {
                text.inputEl.maxLength = 100;
                text.setPlaceholder("serif").setValue(this.plugin.settings.bookFont).onChange(async (value) => {
                  this.plugin.settings.bookFont = value.trim() || "serif";
                  await this.plugin.saveSettings();
                });
                setting.addButton((button) => button.setButtonText(t("choose")).onClick(async () => {
                  const fonts = await this.plugin.bookFontChoices();
                  new BookFontModal(this.app, fonts, async (font) => {
                    this.plugin.settings.bookFont = font;
                    text.setValue(font);
                    await this.plugin.saveSettings();
                  }).open();
                }));
              });
            }
          },
          { name: t("justifyParagraphs"), control: { type: "toggle", key: "bookJustify" } },
          { name: t("noParagraphSpacing"), control: { type: "toggle", key: "bookNoParagraphSpacing" } },
          { name: t("firstLineIndent"), control: { type: "toggle", key: "bookIndent" } },
          { name: t("frenchHyphenation"), control: { type: "toggle", key: "bookHyphenate" } },
          {
            name: t("textSize"),
            control: { type: "slider", key: "bookTextSize", min: 12, max: 40, step: 1, displayFormat: (value) => t("pixels", { value }) }
          }
        ]
      },
      {
        type: "group",
        heading: t("highlight"),
        items: [
          {
            name: t("highlight"),
            desc: t("highlightDescription"),
            render: (setting) => {
              setting.addToggle((toggle) => toggle.setValue(this.plugin.settings.highlightEnabled).onChange(async (value) => {
                this.plugin.settings.highlightEnabled = value;
                await this.plugin.saveSettings();
                this.plugin.refreshDecorations();
              }));
            }
          },
          {
            name: t("color"),
            desc: t("colorDescription"),
            render: (setting) => {
              var _a, _b;
              const sample = setting.settingEl.createEl("canvas", { cls: "french-typos-theme-color", attr: { width: "1", height: "1" } });
              const context = sample.getContext("2d");
              let themeColor = "#000000";
              if (context) {
                context.fillStyle = (_b = (_a = sample.ownerDocument.defaultView) == null ? void 0 : _a.getComputedStyle(sample).color) != null ? _b : themeColor;
                context.fillRect(0, 0, 1, 1);
                themeColor = "#" + Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3).map((channel) => channel.toString(16).padStart(2, "0")).join("");
              }
              sample.remove();
              setting.addColorPicker((color) => color.setValue(this.plugin.settings.highlightColor || themeColor).onChange(async (value) => {
                this.plugin.settings.highlightColor = value;
                await this.plugin.saveSettings();
              }));
              setting.addButton((button) => button.setButtonText(t("theme")).onClick(async () => {
                this.plugin.settings.highlightColor = "";
                await this.plugin.saveSettings();
                this.update();
              }));
            }
          },
          {
            name: t("cursorSize"),
            desc: t("cursorSizeDescription"),
            render: (setting) => {
              setting.addSlider((slider) => slider.setLimits(0, 6, 1).setValue(this.plugin.settings.cursorWidth).setDisplayFormat((value) => value === 0 ? t("standard") : t("pixels", { value })).setInstant(true).onChange(async (value) => {
                this.plugin.settings.cursorWidth = value;
                await this.plugin.saveSettings();
              }));
            }
          },
          {
            name: t("button"),
            desc: t("buttonDescription"),
            render: (setting) => {
              setting.addToggle((toggle) => toggle.setValue(this.plugin.settings.highlightButton).onChange(async (value) => {
                this.plugin.settings.highlightButton = value;
                await this.plugin.saveSettings();
              }));
            }
          }
        ]
      }
    ];
  }
};

/* nosourcemap */
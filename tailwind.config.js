module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "color-kitdanger-secondary": "var(--color-kitdanger-secondary)",
        "dark-theme-color-schemeprimary":
          "var(--dark-theme-color-schemeprimary)",
        "dark-theme-color-schemeprimary-hover":
          "var(--dark-theme-color-schemeprimary-hover)",
        "gray-900": "var(--gray-900)",
        "grays-100": "var(--grays-100)",
        "grays-200": "var(--grays-200)",
        "grays-300": "var(--grays-300)",
        "grays-500": "var(--grays-500)",
        "grays-600": "var(--grays-600)",
        "light-themebackground": "var(--light-themebackground)",
        "light-themebackground-secondary":
          "var(--light-themebackground-secondary)",
        "light-themeborder": "var(--light-themeborder)",
        "light-themeprimary": "var(--light-themeprimary)",
        "light-themetext-primary": "var(--light-themetext-primary)",
        "light-themetext-secondary": "var(--light-themetext-secondary)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "desktop-display-sm-medium":
          "var(--desktop-display-sm-medium-font-family)",
        "desktop-text-md-regular": "var(--desktop-text-md-regular-font-family)",
        "desktop-text-small-medium":
          "var(--desktop-text-small-medium-font-family)",
        "desktop-text-small-regular":
          "var(--desktop-text-small-regular-font-family)",
        "desktop-text-xs-medium": "var(--desktop-text-xs-medium-font-family)",
        "desktop-text-xs-regular": "var(--desktop-text-xs-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "bloor-2-secondary": "var(--bloor-2-secondary)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          We'd love to hear from you! Feel free to reach out with any questions, feedback, or collaboration
          opportunities.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-neutral-800 dark:text-neutral-200">Email:</p>
            <a
              href="mailto:info@bigdatanavigator.site"
              className="text-neutral-800 hover:underline dark:text-neutral-200"
            >
              info@bigdatanavigator.site
            </a>
          </div>
          <div>
            <p className="font-medium text-neutral-800 dark:text-neutral-200">Support:</p>
            <a
              href="mailto:support@bigdatanavigator.site"
              className="text-neutral-800 hover:underline dark:text-neutral-200"
            >
              support@bigdatanavigator.site
            </a>
          </div>
          <div>
            <p className="font-medium text-neutral-800 dark:text-neutral-200">GitHub:</p>
            <a
              href="https://github.com/yourusername/big-data-navigator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 hover:underline dark:text-neutral-200"
            >
              github.com/yourusername/big-data-navigator
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

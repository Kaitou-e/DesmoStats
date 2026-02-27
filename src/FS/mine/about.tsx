import CustomButton from "../react/src/components/Toolbar/CustomButton.tsx";
import { useDialog } from "../react/src/hooks/useDialog.tsx";

function iconAbout({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  // Source: Deepseek
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16V12" />
      <circle cx="12" cy="8" r="1" fill={color} />
    </svg>
  );
}

function About() {
  const { showDialog, hideDialog } = useDialog();
  const tooltip = "About";
  const key = "aboutButtom";
  const icon = iconAbout({ size: 24, color: "#202020", stroke: 1 });

  return (
    <CustomButton
      key={key}
      tooltip={tooltip}
      icon={icon}
      onClick={() => {
        showDialog(
          <>
            <h3>About</h3>
            <p>
              <b>DesmoStats</b> is a free, login-less online statistics
              calculator built around a fully functional spreadsheet. Data is
              entered in a familiar table format, while statistical tools are
              accessed through structured menus, similar to desktop software
              like JMP.
            </p>

            <p>
              The spreadsheet supports formulas, drag-and-fill, and
              importing/exporting CSV, JSON, and XLSX files. Built-in
              statistical tools include:
            </p>

            <ul>
              <li>Variable summaries</li>
              <li>Distributions</li>
              <li>Confidence intervals</li>
              <li>Hypothesis tests</li>
              <li>Plots and graphs</li>
              <li>Linear regression and residuals</li>
            </ul>
            <br />

            <p>
              The project began with the goal of making statistics tools
              accessible to students, especially AP Statistics students. A
              dedicated TI-Nspire mode mirrors the calculator used for the exam
              and in-class, matching its menus, inputs, outputs, and
              terminology. (Demonstrated to the left.) The long-term vision is
              to grow this foundation into a higher-level statistics calculator,
              starting from these core features.
              <li>
                <a href="https://github.com/Kaitou-e/DesmoStats">GitHub repo</a>
              </li>
              <li>Contact: desmostats@gmail.com</li>
            </p>
          </>,
          "ok"
        );
      }}
    />
  );
}

export default About;

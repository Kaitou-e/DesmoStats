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
              like Minitab.
            </p>
            <p>
              The project began with the goal of making statistics tools
              accessible to students, especially AP Statistics students. A
              dedicated TI-Nspire mode mirrors the calculator used for the exam
              and in-class, matching its menus, inputs, outputs, and
              terminology.
            </p>
          </>,
          "ok"
        );
      }}
    />
  );
}

export default About;

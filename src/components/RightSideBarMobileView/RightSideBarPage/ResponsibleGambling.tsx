
import "./ResponsibleGambling.css"

const ResponsibleGambling = () => {
  return (
    <div
      className="ResponsibleGambling"
      style={{ marginLeft: 15, marginRight: 15 }}
    >
      <h1>Responsible Gaming</h1>
      <div className="general">
        <p style={{ fontSize: "15px" }}>
          The Site is committed to Responsible Gambling and we take our
          responsibilities towards our customers very seriously. We aim to provide
          an environment in which you can bet in a safe, fair and above all
          responsible manner. If you feel you may have a problem when it comes to
          controlling your gambling, please consider using one of our tools aimed at
          helping this:
        </p>
        <ol>
          <li>By selecting a deposit limit per day, week or month</li>
          <li>
            By using our “time out” facility to allow you to suspend your account
            activity for the following durations - 24 hours, one week, one month or
            any other period as you may reasonably request up to a maximum of 6
            weeks;
          </li>
          <li>
            Opting for a self-exclusion, the minimum period being six months which
            means your account will be blocked for a set amount of time.
            Self-exclusions cannot be undone and may only be unlocked by contacting
            customer services when the self-exclusion time runs out
          </li>
        </ol>
      </div>
    </div>

  )
}

export default ResponsibleGambling
export default class TimerClass
{
    constructor()
    {
        this.targetSeconds = 0;
        this.currentSeconds = 0;
        this.timerState = "stop"; //stop, running, paused, finished
        this.timerMode = "timer"; //timer, countdown
    }

    StartTimer(targetSeconds, timerMode)
    {
        this.targetSeconds = targetSeconds * 1000; // Change seconds to milliseconds
        this.timerMode = timerMode; // Set timer mode

        // Initialize currentSeconds based on timerMode
        this.currentSeconds = (timerMode === "timer") ? 0 : this.targetSeconds;

        this.ChangeState("running"); // Change state to running
    }

    PauseTimer(isPause)
    {
        if (isPause && this.timerState === "running")
        {
            this.ChangeState("paused"); // Change state to paused
        }
        else if (!isPause && this.timerState === "paused")
        {
            this.ChangeState("running"); // Change state to running
        }
    }

    StopTimer()
    {
        this.currentSeconds = 0; // Reset current seconds
        this.ChangeState("stop"); // Change state to stop
    }

    UpdateTimer(tick)
    {
        if (this.GetState() !== "running")
        {
            console.log("Updating timer is canceled. Because the state is not running.");
            return;
        }

        if (this.timerMode === "timer")
        {
            this.currentSeconds += tick; // Update current time

            // Finish check. Change state if target seconds is reached
            if (this.currentSeconds >= this.targetSeconds)
            {
                this.ChangeState("finished"); // Change state to finished
            }
        }
        else
        {
            this.currentSeconds -= tick; // Update current time

            // Finish check. Change state if target seconds is reached. Target second is 0
            if (this.currentSeconds <= 0)
            {
                this.ChangeState("finished");
            }
        }
    }

    GetState()
    {
        return this.timerState;
    }

    ChangeState(state)
    {
        // Safety check
        if (state !== "stop" && state !== "running" && state !== "paused" && state !== "finished")
        {
            console.log("Wrong state name is reached.");
            state = "stop";
        }

        this.timerState = state; //Set state.
    }

    GetValueOfTimer()
    {
        return this.currentSeconds;
    }
}

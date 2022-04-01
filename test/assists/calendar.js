
class Calendar {

    get today () {
        return $("button[class*='react-calendar__tile--now react-calendar__tile--active']");
    }

    get previousMonth () {
        return $("button[class='react-calendar__navigation__arrow react-calendar__navigation__prev-button']");
    }

    get calendar(){
        return $(".deel-ui__calendar-input-container__input_icon");
    }

    get allDays(){
        return $$("button[class*='react-calendar__month-view__days__day']");
    }

    async openCalendar () {
        await this.calendar.click();
    }

    async selectYesterday () {
        await this.openCalendar();
        let yesterday;
        let allDaysList = await this.allDays;
        for (let i = 0; i < allDaysList.length; i++) {
            if(await allDaysList[i].isEqual(await this.today)){
                if (i === 0){
                    await this.previousMonth.click();
                    yesterday = await this.allDays[length];
                } else {
                    yesterday = allDaysList[i-1];
                }

                break;
            }
        }
        await yesterday.click();
    }
}

module.exports = new Calendar();

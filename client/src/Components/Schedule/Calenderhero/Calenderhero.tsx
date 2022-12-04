import React from "react";
import { DayPicker } from "react-day-picker";

const Calenderhero = ({
  selected,
  setSelected,
}: {
  selected: Date;
  setSelected: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <DayPicker
              mode="single"
              className="dark:text-gray-200"
              selected={selected}
              // disable selecting days before today
              // disabledDays={{ before: new Date() }}
              // disable selecting days after today + 30 days
              modifiers={
                {
                  // disabled: [
                  //   {
                  //     after: new Date(
                  //       new Date().setDate(new Date().getDate() + 6)
                  //     ),
                  //     before: new Date(
                  //       new Date().setDate(new Date().getDate() - 0)
                  //     ),
                  //     // hide the disabled days
                  //     // hidden: true,
                  //   },
                  // ],
                }
              }
              onDayClick={(day) => {
                setSelected(day);
                console.log(day);
              }}
              // onDayClick={setSelected}
            />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calenderhero;

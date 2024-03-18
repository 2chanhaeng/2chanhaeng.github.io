type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString);
  const showDate = new Intl.DateTimeFormat().format(date);
  return <time dateTime={dateString}>{showDate}</time>;
};

export default DateFormatter;

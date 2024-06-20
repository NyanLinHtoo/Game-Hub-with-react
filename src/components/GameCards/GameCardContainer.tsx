interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="bg-slate-400 rounded-xl overflow-auto">{children}</div>
  );
};

export default GameCardContainer;

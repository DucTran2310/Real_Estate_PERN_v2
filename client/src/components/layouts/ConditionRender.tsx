import { ReactNode } from 'react';

interface ConditionRenderProps {
  show: boolean;
  children: ReactNode;
}

const ConditionRender: React.FC<ConditionRenderProps> = ({
  show = false,
  children
}) => {
  return (
    show ? children : null
  );
}

export default ConditionRender;
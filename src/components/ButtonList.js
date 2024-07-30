
import Button from "../ui/Button.js";
import { FaCoffee } from 'react-icons/fa';

const ButtonList = () => {
  return (
    <>
      <Button className="mx-7 my-4" size="large" variant="primary" borderRadius="rounded-sm" icon={FaCoffee} iconPosition="left"   loading={true} >
        Primary
      </Button>
      <Button className="mx-7 my-4" textColor="red" size="large" variant="secondary" borderRadius="rounded-xs" icon={FaCoffee} iconPosition="right" enabled={true} hoverEffect="fill-left-to-right">
        Secondary
      </Button>
      <Button className="mx-7 my-4"  enabled={false}  variant="success" borderRadius="rounded-lg"    hoverEffect="scale">
        Success
      </Button>
      <Button className="mx-7 my-4"    variant="danger" borderRadius="rounded-md"      >
        Danger
      </Button>
      <Button className="mx-7 my-4"    variant="warning" borderRadius="rounded-full"      >
        Warning
      </Button>
      <Button className="mx-7 my-4"  variant="info" borderRadius="rounded-none"      >
        Info
      </Button>
      <Button className="mx-7 my-4"  textColor="red"  variant="light" borderRadius="rounded-lg"      >
        Light
      </Button>
      <Button className="mx-7 my-4"    variant="dark" borderRadius="rounded-lg"      >
        Dark
      </Button>
      <Button className="mx-7 my-4"  textColor="red"  variant="outline" borderRadius="rounded-lg"      >
        Outline
      </Button>
      <Button className="mx-7 my-4"    variant="gradient" gradient borderRadius="rounded-md"      >
        Gradient
      </Button>
      <Button className="mx-7 my-4" customWidth="200px" customHeight="60px" borderRadius="rounded-full" variant="primary" icon={FaCoffee} iconPosition="left"    hoverText="Hovered">
        Not Hover
      </Button>
    </>
  );
};

export default ButtonList;

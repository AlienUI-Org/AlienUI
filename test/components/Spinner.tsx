import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";

export default function Example() {
  return <Spinner size="large" color={colors.gray[500]} />;
}

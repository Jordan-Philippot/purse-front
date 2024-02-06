import Text from "components/ui/Text";

interface TextErrorProps {
  error: string;
}
export default function TextError({ error }: TextErrorProps) {
  return (
    <Text
      color="secondary"
      size="s"
      style={{ textAlign: "left", marginRight: "auto" }}
    >
      {error}
    </Text>
  );
}

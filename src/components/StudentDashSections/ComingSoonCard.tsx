import { Card, CardBody } from "@heroui/react";

export const ComingSoonCard = () => (
  <Card
    className="bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700"
    radius="lg"
  >
    <CardBody className="p-3 text-center">
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        Coming Soon
      </div>
    </CardBody>
  </Card>
);

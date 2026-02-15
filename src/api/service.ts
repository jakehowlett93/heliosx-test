export const ConsultationServiceClient = async ({
  data,
}: {
  data: Record<string, string>;
}) => {
  console.log("Submitting consultation:", data);
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

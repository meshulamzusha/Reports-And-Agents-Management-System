import { useForm } from "react-hook-form";
import { ReportInputs } from "../../types/report.types";
import { useReportsStore } from "../../stores/reports.store";

const CreateReport = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportInputs>();

  const addReport = useReportsStore((state) => state.addReport);

  const onSubmit = async (data: ReportInputs) => {
    const formData = new FormData();

    formData.append("category", data.category);
    formData.append("urgency", data.urgency);
    formData.append("message", data.message);

    const file = data.file?.[0];
    if (file) {
      formData.append("file", file);
    }

    await addReport(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("category")}>
        <option value="intelligence">intelligence</option>
        <option value="logistics">logistics</option>
        <option value="alert">alert</option>
      </select>

      <select {...register("urgency")}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <textarea {...register("message")} />

      <input type="file" {...register("file")} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateReport;

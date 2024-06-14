"use client";

import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const endPoint = "";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  country: Yup.string()
    .min(4, "Too Short!")
    .max(56, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number. Enter phone number in international format. Ex: +14158141829"
    )
    .required("Required"),
  message: Yup.string().required("Required"),
});

interface FormikValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [submitState, setSubmitState] = React.useState("Submit");

  const sendEmail = async (
    values: FormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setSubmitState("Submitting");
    const { firstName, lastName, email, country, phone, message } = values;

    let payload = {
      from_name: `${firstName}  ${lastName}`,
      from_email: email,
      country: country,
      phone: phone,
      message: message,
    };

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        payload,
        process.env.EMAILJS_PUBLIC_KEY!
      );
      resetForm();
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "success",
        title: "message sent successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "error",
        title: "something went wrong",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    } finally {
      setSubmitState("Submit");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: sendEmail,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              required
              placeholder="John"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="block p-2 rounded-lg w-full border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              placeholder="Doe"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="block p-2 rounded-lg w-full border border-gray-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            placeholder="example@email.com"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="block p-2 rounded-lg w-full border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            required
            placeholder="Ghana"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            className="block p-2 rounded-lg w-full border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            required
            placeholder="+233 123 456 7890"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="block p-2 rounded-lg w-full border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            value={formik.values.message}
            onChange={formik.handleChange}
            rows={5}
            placeholder="Describe shortly how we can help you"
            className="block p-2 rounded-lg w-full border border-gray-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submitState}
        </button>
      </form>
    </div>
  );
}

interface ManageBlogFormProps {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  category?: string | null;
  imgsrc?: string | null;
  detail?: string | null;
}

export function ManageBlogForm({
  id = null,
  title = null,
  description = null,
  category = null,
  imgsrc = null,
  detail = null,
}: ManageBlogFormProps) {
  const [submit, setSubmit] = React.useState("Submit");
  const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
    title,
    description,
    category,
    imgsrc,
    detail,
  });

  function resetForm() {
    setFormValues({
      title,
      description,
      category,
      imgsrc,
      detail,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit("Submitting");

    if (id) {
      try {
        const response = await axios.put(`${endPoint}/blog/${id}`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Post Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error: any) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        setSubmit("submit");
      }
    } else {
      try {
        const response = await axios.post(`${endPoint}/blog/`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Post Sent Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        resetForm();
        setSubmit("Submit");
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
      >
        <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={formValues.title || ""}
            onChange={handleInputChange}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            value={formValues.description || ""}
            onChange={handleInputChange}
          />
        </div>
        <TextField
          id="category"
          name="category"
          label="Category"
          variant="outlined"
          value={formValues.category || ""}
          onChange={handleInputChange}
        />
        <TextField
          id="imgsrc"
          name="imgsrc"
          label="Image Source"
          variant="outlined"
          value={formValues.imgsrc || ""}
          onChange={handleInputChange}
        />
        <TextField
          id="detail"
          name="detail"
          label="Blog Details"
          variant="outlined"
          multiline
          rows={20}
          value={formValues.detail || ""}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}

interface ManageProjectFormType {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  src?: string | null;
}

export function ManageProjectForm({
  id = null,
  title = null,
  description = null,
  src = null,
}: ManageProjectFormType) {
  const [submit, setSubmit] = React.useState("Submit");
  const [formValues, setFormValues] = React.useState<ManageProjectFormType>({
    title,
    description,
    src,
  });

  function resetForm() {
    setFormValues({
      title,
      description,
      src,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit("Submitting");

    if (id) {
      try {
        const response = await axios.put(
          `${endPoint}/projects/${id}`,
          formValues
        );
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Post Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error: any) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        setSubmit("submit");
      }
    } else {
      try {
        const response = await axios.post(`${endPoint}/projects`, formValues);
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Post Sent Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        resetForm();
        setSubmit("Submit");
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
      >
        <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={formValues.title || ""}
            onChange={handleInputChange}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            value={formValues.description || ""}
            onChange={handleInputChange}
          />
        </div>
        <TextField
          id="src"
          name="src"
          label="Demo Source"
          variant="outlined"
          value={formValues.src || ""}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}

interface ManageServiceFormType {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  imgsrc?: string | null;
}

export function ManageServiceForm({
  id = null,
  title = null,
  description = null,
  imgsrc = null,
}: ManageServiceFormType) {
  const [submit, setSubmit] = React.useState("Submit");
  const [formValues, setFormValues] = React.useState<ManageServiceFormType>({
    title,
    description,
    imgsrc,
  });

  function resetForm() {
    setFormValues({
      title,
      description,
      imgsrc,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit("Submitting");

    if (id) {
      try {
        const response = await axios.put(
          `${endPoint}/services/${id}`,
          formValues
        );
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Service Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error: any) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        setSubmit("submit");
      }
    } else {
      try {
        const response = await axios.post(`${endPoint}/services`, formValues);
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Service Sent Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        resetForm();
        setSubmit("Submit");
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
      >
        <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
          <TextField
            id="title"
            name="title"
            label="Title "
            value={formValues.title || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            value={formValues.description || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
        </div>
        <TextField
          id="imgsrc"
          name="imgsrc"
          label="Image Source"
          value={formValues.imgsrc || ""}
          onChange={handleInputChange}
          variant="outlined"
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}

interface ManageTechFormType {
  id?: string | null;
  title?: string | null;
  imgsrc?: string | null;
}

export function ManageTechForm({
  id = null,
  title = null,
  imgsrc = null,
}: ManageTechFormType) {
  const [submit, setSubmit] = React.useState("Submit");
  const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
    title,
    imgsrc,
  });

  function resetForm() {
    setFormValues({
      title,
      imgsrc,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit("Submitting");

    if (id) {
      try {
        const response = await axios.put(`${endPoint}/stack/${id}`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Tech Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error: any) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        setSubmit("submit");
      }
    } else {
      try {
        const response = await axios.post(`${endPoint}/stack`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Tech Sent Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        resetForm();
        setSubmit("Submit");
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[50%]"
      >
        <div className="grid-cols-1 gap-4 grid">
          <TextField
            id="title"
            name="title"
            label="Title "
            value={formValues.title || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
        </div>
        <TextField
          id="imgsrc"
          name="imgsrc"
          label="Image Source"
          value={formValues.imgsrc || ""}
          onChange={handleInputChange}
          variant="outlined"
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}

interface ManageCertFormType {
  id?: string | null;
  title?: string | null;
  imgsrc?: string | null;
}

export function ManageCertForm({
  id = null,
  title = null,
  imgsrc = null,
}: ManageCertFormType) {
  const [submit, setSubmit] = React.useState("Submit");
  const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
    title,
    imgsrc,
  });

  function resetForm() {
    setFormValues({
      title,
      imgsrc,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit("Submitting");

    if (id) {
      try {
        const response = await axios.put(`${endPoint}/certs/${id}`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Certificate Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error: any) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        setSubmit("submit");
      }
    } else {
      try {
        const response = await axios.post(`${endPoint}/certs/`, formValues);
        if (response.status === 200) {
          Swal.fire({
            toast: true,
            position: "bottom",
            icon: "success",
            title: "Certificate Sent Successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "error",
          title: "something went wrong",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
      } finally {
        resetForm();
        setSubmit("Submit");
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[50%]"
      >
        <div className="grid-cols-1 gap-4 grid">
          <TextField
            id="title"
            name="title"
            label="Title "
            value={formValues.title || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
        </div>
        <TextField
          id="imgsrc"
          name="imgsrc"
          label="Image Source"
          value={formValues.imgsrc || ""}
          onChange={handleInputChange}
          variant="outlined"
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 text-black w-[6em] newsreader"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}

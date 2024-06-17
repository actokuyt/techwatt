"use client";

import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import clsx from "clsx";

export function ContactForm() {
  const [submitState, setSubmitState] = React.useState("Submit");
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();
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
      let response = await axios.post("/api/contact", payload);
      if (response.status === 200) {
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          phone: "",
          message: "",
        });
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "success",
          title: "message sent successfully",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }
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

  return (
    <div>
      <form onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
        <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              required
              placeholder="John"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
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
              value={values.lastName}
              onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
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
            value={values.country}
            onChange={handleChange}
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
            value={values.phone}
            onChange={handleChange}
            className="block p-2 rounded-lg w-full border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            value={values.message}
            onChange={handleChange}
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

export function LoginForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    user: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loginState, setLoginState] = React.useState("Login");

  const login = async (e: any) => {
    e.preventDefault();
    try {
      setLoginState("Loging In");
      await axios.post("/api/login", user);
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "success",
        title: "login sucessful",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      router.push("/admin");
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "error",
        title: "login failed",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    } finally {
      setLoginState("Login");
    }
  };

  React.useEffect(() => {
    if (user.user.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="border border-gray-300 rounded-lg p-2 w-full">
      <form onSubmit={login} className="grid grid-cols-1 gap-2">
        <div className="flex flex-col">
          <label htmlFor="user">User:</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="user"
            type="text"
            value={user.user}
            onChange={(e) => setUser({ ...user, user: e.target.value })}
            placeholder="User"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            required
          />
        </div>
        <button
          disabled={buttonDisabled}
          type="submit"
          className={clsx(
            "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600",
            { "text-gray-300 ": buttonDisabled, "text-black": !buttonDisabled }
          )}
        >
          {loginState}
        </button>
      </form>
    </div>
  );
}

// interface ManageBlogFormProps {
//   id?: string | null;
//   title?: string | null;
//   description?: string | null;
//   category?: string | null;
//   imgsrc?: string | null;
//   detail?: string | null;
// }

// export function ManageBlogForm({
//   id = null,
//   title = null,
//   description = null,
//   category = null,
//   imgsrc = null,
//   detail = null,
// }: ManageBlogFormProps) {
//   const [submit, setSubmit] = React.useState("Submit");
//   const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
//     title,
//     description,
//     category,
//     imgsrc,
//     detail,
//   });

//   function resetForm() {
//     setFormValues({
//       title,
//       description,
//       category,
//       imgsrc,
//       detail,
//     });
//   }

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmit("Submitting");

//     if (id) {
//       try {
//         const response = await axios.put(`${endPoint}/blog/${id}`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Post Updated Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error: any) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         setSubmit("submit");
//       }
//     } else {
//       try {
//         const response = await axios.post(`${endPoint}/blog/`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Post Sent Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         resetForm();
//         setSubmit("Submit");
//       }
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
//       >
//         <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
//           <TextField
//             id="title"
//             name="title"
//             label="Title"
//             variant="outlined"
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//           />
//           <TextField
//             id="description"
//             name="description"
//             label="Description"
//             variant="outlined"
//             value={formValues.description || ""}
//             onChange={handleInputChange}
//           />
//         </div>
//         <TextField
//           id="category"
//           name="category"
//           label="Category"
//           variant="outlined"
//           value={formValues.category || ""}
//           onChange={handleInputChange}
//         />
//         <TextField
//           id="imgsrc"
//           name="imgsrc"
//           label="Image Source"
//           variant="outlined"
//           value={formValues.imgsrc || ""}
//           onChange={handleInputChange}
//         />
//         <TextField
//           id="detail"
//           name="detail"
//           label="Blog Details"
//           variant="outlined"
//           multiline
//           rows={20}
//           value={formValues.detail || ""}
//           onChange={handleInputChange}
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-300 text-black w-[6em] newsreader"
//         >
//           {submit}
//         </button>
//       </form>
//     </div>
//   );
// }

// interface ManageProjectFormType {
//   id?: string | null;
//   title?: string | null;
//   description?: string | null;
//   src?: string | null;
// }

// export function ManageProjectForm({
//   id = null,
//   title = null,
//   description = null,
//   src = null,
// }: ManageProjectFormType) {
//   const [submit, setSubmit] = React.useState("Submit");
//   const [formValues, setFormValues] = React.useState<ManageProjectFormType>({
//     title,
//     description,
//     src,
//   });

//   function resetForm() {
//     setFormValues({
//       title,
//       description,
//       src,
//     });
//   }

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmit("Submitting");

//     if (id) {
//       try {
//         const response = await axios.put(
//           `${endPoint}/projects/${id}`,
//           formValues
//         );
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Post Updated Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error: any) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         setSubmit("submit");
//       }
//     } else {
//       try {
//         const response = await axios.post(`${endPoint}/projects`, formValues);
//         console.log(response);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Post Sent Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         resetForm();
//         setSubmit("Submit");
//       }
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
//       >
//         <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
//           <TextField
//             id="title"
//             name="title"
//             label="Title"
//             variant="outlined"
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//           />
//           <TextField
//             id="description"
//             name="description"
//             label="Description"
//             variant="outlined"
//             value={formValues.description || ""}
//             onChange={handleInputChange}
//           />
//         </div>
//         <TextField
//           id="src"
//           name="src"
//           label="Demo Source"
//           variant="outlined"
//           value={formValues.src || ""}
//           onChange={handleInputChange}
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-300 text-black w-[6em] newsreader"
//         >
//           {submit}
//         </button>
//       </form>
//     </div>
//   );
// }

// interface ManageServiceFormType {
//   id?: string | null;
//   title?: string | null;
//   description?: string | null;
//   imgsrc?: string | null;
// }

// export function ManageServiceForm({
//   id = null,
//   title = null,
//   description = null,
//   imgsrc = null,
// }: ManageServiceFormType) {
//   const [submit, setSubmit] = React.useState("Submit");
//   const [formValues, setFormValues] = React.useState<ManageServiceFormType>({
//     title,
//     description,
//     imgsrc,
//   });

//   function resetForm() {
//     setFormValues({
//       title,
//       description,
//       imgsrc,
//     });
//   }

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmit("Submitting");

//     if (id) {
//       try {
//         const response = await axios.put(
//           `${endPoint}/services/${id}`,
//           formValues
//         );
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Service Updated Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error: any) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         setSubmit("submit");
//       }
//     } else {
//       try {
//         const response = await axios.post(`${endPoint}/services`, formValues);
//         console.log(response);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Service Sent Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         resetForm();
//         setSubmit("Submit");
//       }
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[60%]"
//       >
//         <div className="grid-cols-1 gap-4 grid lg:grid-cols-2 lg:gap-4">
//           <TextField
//             id="title"
//             name="title"
//             label="Title "
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//           <TextField
//             id="description"
//             name="description"
//             label="Description"
//             value={formValues.description || ""}
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//         </div>
//         <TextField
//           id="imgsrc"
//           name="imgsrc"
//           label="Image Source"
//           value={formValues.imgsrc || ""}
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-300 text-black w-[6em] newsreader"
//         >
//           {submit}
//         </button>
//       </form>
//     </div>
//   );
// }

// interface ManageTechFormType {
//   id?: string | null;
//   title?: string | null;
//   imgsrc?: string | null;
// }

// export function ManageTechForm({
//   id = null,
//   title = null,
//   imgsrc = null,
// }: ManageTechFormType) {
//   const [submit, setSubmit] = React.useState("Submit");
//   const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
//     title,
//     imgsrc,
//   });

//   function resetForm() {
//     setFormValues({
//       title,
//       imgsrc,
//     });
//   }

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmit("Submitting");

//     if (id) {
//       try {
//         const response = await axios.put(`${endPoint}/stack/${id}`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Tech Updated Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error: any) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         setSubmit("submit");
//       }
//     } else {
//       try {
//         const response = await axios.post(`${endPoint}/stack`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Tech Sent Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         resetForm();
//         setSubmit("Submit");
//       }
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[50%]"
//       >
//         <div className="grid-cols-1 gap-4 grid">
//           <TextField
//             id="title"
//             name="title"
//             label="Title "
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//         </div>
//         <TextField
//           id="imgsrc"
//           name="imgsrc"
//           label="Image Source"
//           value={formValues.imgsrc || ""}
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-300 text-black w-[6em] newsreader"
//         >
//           {submit}
//         </button>
//       </form>
//     </div>
//   );
// }

// interface ManageCertFormType {
//   id?: string | null;
//   title?: string | null;
//   imgsrc?: string | null;
// }

// export function ManageCertForm({
//   id = null,
//   title = null,
//   imgsrc = null,
// }: ManageCertFormType) {
//   const [submit, setSubmit] = React.useState("Submit");
//   const [formValues, setFormValues] = React.useState<ManageBlogFormProps>({
//     title,
//     imgsrc,
//   });

//   function resetForm() {
//     setFormValues({
//       title,
//       imgsrc,
//     });
//   }

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmit("Submitting");

//     if (id) {
//       try {
//         const response = await axios.put(`${endPoint}/certs/${id}`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Certificate Updated Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error: any) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         setSubmit("submit");
//       }
//     } else {
//       try {
//         const response = await axios.post(`${endPoint}/certs/`, formValues);
//         if (response.status === 200) {
//           Swal.fire({
//             toast: true,
//             position: "bottom",
//             icon: "success",
//             title: "Certificate Sent Successfully",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         Swal.fire({
//           toast: true,
//           position: "bottom",
//           icon: "error",
//           title: "something went wrong",
//           showConfirmButton: false,
//           timer: 5000,
//           timerProgressBar: true,
//         });
//       } finally {
//         resetForm();
//         setSubmit("Submit");
//       }
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 mx-auto md:w-[70%] lg:w-[50%]"
//       >
//         <div className="grid-cols-1 gap-4 grid">
//           <TextField
//             id="title"
//             name="title"
//             label="Title "
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//         </div>
//         <TextField
//           id="imgsrc"
//           name="imgsrc"
//           label="Image Source"
//           value={formValues.imgsrc || ""}
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-300 text-black w-[6em] newsreader"
//         >
//           {submit}
//         </button>
//       </form>
//     </div>
//   );
// }

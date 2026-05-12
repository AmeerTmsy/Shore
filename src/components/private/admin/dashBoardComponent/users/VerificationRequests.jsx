import React, { useState } from "react";
import {
  Search,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Clock3,
  TrendingUp,
  Filter,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  FileText,
  Building2,
  User,
  Globe,
  Smartphone,
  UserRoundPlus,
  IdCard,
  MapPin,
  BadgeAlert,
  X,
} from "lucide-react";

const verificationRequests = [
  {
    id: 1,
    name: "Marcus Thorne",
    email: "m.thorne@proton.me",
    type: "Individual",
    ai: 94,
    risk: "Low Risk",
    status: "Pending",
    time: "2 mins ago",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    email: "elena.r@fintech.io",
    type: "Business",
    ai: 42,
    risk: "High Risk",
    status: "Flagged",
    time: "12 mins ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Julian Chen",
    email: "j.chen@gmail.com",
    type: "Individual",
    ai: 89,
    risk: "Medium Risk",
    status: "Pending",
    time: "1 hour ago",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function VerificationRequests() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openDrawer = (user) => {
    setSelectedUser(user);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);

    setTimeout(() => {
      setSelectedUser(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] p-4 md:p-7">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
            Verification Requests
          </h1>

          <p className="text-neutral-500 mt-2 text-lg">
            Reviewing 142 pending identities today.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="h-14 px-6 rounded-2xl border border-orange-200 bg-white font-semibold text-neutral-800 flex items-center gap-2">
            <FileText size={20} />
            Export Reports
          </button>

          <button className="h-14 px-6 rounded-2xl border border-orange-200 bg-white font-semibold text-neutral-800 flex items-center gap-2">
            <Filter size={20} />
            Bulk Actions
          </button>

          <button className="h-14 px-6 rounded-2xl bg-neutral-100 font-semibold text-neutral-900 flex items-center gap-2">
            <ShieldAlert size={20} />
            AI Scan
          </button>

          <button className="h-14 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold flex items-center gap-2">
            <ChevronRight size={20} />
            Review Queue
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 min-w-max pb-2">
          {[
            {
              title: "Pending",
              value: "142",
              icon: <Clock3 className="text-orange-500" />,
              trend: "+12%",
            },
            {
              title: "Approved",
              value: "2,840",
              icon: <ShieldCheck className="text-green-500" />,
              trend: "-3%",
            },
            {
              title: "Rejected",
              value: "312",
              icon: <ShieldX className="text-red-500" />,
              trend: "+5%",
            },
            {
              title: "High Risk",
              value: "18",
              icon: <ShieldAlert className="text-orange-500" />,
              trend: "+2%",
            },
            {
              title: "Avg Review",
              value: "4.2m",
              icon: <Clock3 className="text-blue-500" />,
              trend: "-10%",
            },
            {
              title: "KYC Rate",
              value: "98.2%",
              icon: <TrendingUp className="text-violet-500" />,
              trend: "+0.5%",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[270px] rounded-[32px] border border-orange-200 bg-white p-7 flex-shrink-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="uppercase tracking-wide text-neutral-700 font-semibold">
                  {item.title}
                </h3>

                {item.icon}
              </div>

              <h2 className="text-5xl font-black mt-7 text-neutral-900">
                {item.value}
              </h2>

              <p className="mt-5 text-green-600 font-semibold">
                ↗ {item.trend}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FILTERS */}
      <div className="mt-8 rounded-[36px] border border-orange-200 bg-white p-5">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex-1 h-16 rounded-2xl bg-neutral-100 px-5 flex items-center gap-4">
            <Search className="text-neutral-500" />
            <input
              placeholder="Search by name, email or ID..."
              className="bg-transparent outline-none w-full text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {["Status: All", "Type: All", "Risk: Any", "Date: Last 7 days"].map(
              (item, i) => (
                <button
                  key={i}
                  className="h-16 px-6 rounded-2xl bg-neutral-100 font-semibold whitespace-nowrap"
                >
                  {item}
                </button>
              )
            )}

            <button className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center">
              <Filter />
            </button>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="hidden lg:block mt-10 overflow-hidden rounded-[36px] border border-orange-200 bg-white">
        <table className="w-full">
          <thead className="border-b border-orange-200 text-left">
            <tr className="text-neutral-700 uppercase tracking-wide text-sm">
              {[
                "User",
                "Type",
                "Docs",
                "AI Conf.",
                "Risk Level",
                "Time",
                "Status",
                "Actions",
              ].map((item) => (
                <th key={item} className="px-8 py-7">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {verificationRequests.map((user) => (
              <tr
                key={user.id}
                className="border-b border-orange-100 hover:bg-orange-50/30 transition"
              >
                <td className="px-8 py-7">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.avatar}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-2xl text-neutral-900">
                        {user.name}
                      </h3>

                      <p className="text-neutral-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-8 py-7">
                  <span className="px-4 py-2 rounded-xl bg-neutral-100 font-semibold">
                    {user.type}
                  </span>
                </td>

                <td className="px-8 py-7">
                  <div className="flex gap-3 text-neutral-500">
                    <IdCard />
                    <User />
                    <Building2 />
                  </div>
                </td>

                <td className="px-8 py-7">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-3 rounded-full bg-neutral-200 overflow-hidden">
                      <div
                        className={`h-full ${
                          user.ai > 80
                            ? "bg-green-500"
                            : user.ai > 50
                            ? "bg-yellow-500"
                            : "bg-orange-500"
                        }`}
                        style={{ width: `${user.ai}%` }}
                      />
                    </div>

                    <span className="font-bold text-xl">{user.ai}%</span>
                  </div>
                </td>

                <td className="px-8 py-7">
                  <span
                    className={`px-4 py-2 rounded-full font-semibold ${
                      user.risk === "Low Risk"
                        ? "bg-green-100 text-green-700"
                        : user.risk === "Medium Risk"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.risk}
                  </span>
                </td>

                <td className="px-8 py-7 text-neutral-700 font-medium">
                  {user.time}
                </td>

                <td className="px-8 py-7">
                  <span
                    className={`px-4 py-2 rounded-full font-semibold ${
                      user.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-8 py-7">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => openDrawer(user)}
                      className="font-bold text-neutral-800"
                    >
                      Review
                    </button>

                    <button className="text-green-600">
                      <CheckCircle2 size={30} />
                    </button>

                    <button className="text-red-600">
                      <XCircle size={30} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-8 flex items-center justify-between">
          <p className="text-neutral-600 font-medium">
            Showing 1-10 of 142 requests
          </p>

          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-xl border border-orange-200 flex items-center justify-center">
              <ChevronLeft />
            </button>

            <button className="w-12 h-12 rounded-xl bg-orange-500 text-white font-bold">
              1
            </button>

            <button className="w-12 h-12 rounded-xl border border-orange-200">
              2
            </button>

            <button className="w-12 h-12 rounded-xl border border-orange-200">
              3
            </button>

            <button className="w-12 h-12 rounded-xl border border-orange-200 flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden mt-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl font-black">Recent Requests</h2>

          <button className="text-orange-700 font-bold text-2xl">
            View All
          </button>
        </div>

        <div className="space-y-5">
          {verificationRequests.map((user) => (
            <div
              key={user.id}
              className="rounded-[32px] border border-orange-200 bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img
                    src={user.avatar}
                    className="w-20 h-20 rounded-full object-cover"
                    alt=""
                  />

                  <div>
                    <h3 className="text-4xl font-black text-neutral-900">
                      {user.name}
                    </h3>

                    <p className="text-neutral-600 mt-1">
                      Submitted 2h ago • #VR-8821
                    </p>
                  </div>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-bold ${
                    user.status === "Pending"
                      ? "bg-neutral-100 text-neutral-600"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="border-t border-orange-100 mt-6 pt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-neutral-600 font-semibold">RISK SCORE</p>

                  <span
                    className={`mt-3 inline-block px-4 py-2 rounded-xl font-bold ${
                      user.risk === "Low Risk"
                        ? "bg-green-100 text-green-700"
                        : user.risk === "Medium Risk"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.risk}
                  </span>
                </div>

                <div>
                  <p className="text-neutral-600 font-semibold">TYPE</p>

                  <h4 className="text-2xl font-black mt-3">{user.type}</h4>
                </div>

                <div className="flex items-end justify-end">
                  <button
                    onClick={() => openDrawer(user)}
                    className="h-14 px-7 rounded-2xl bg-orange-700 text-white font-bold text-xl"
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AUTOMATION */}
        <div className="mt-8 rounded-[36px] bg-[#23272f] text-white p-7">
          <p className="text-neutral-300">Automation Status</p>

          <h2 className="text-4xl font-black mt-2">
            143 Items Auto-processed
          </h2>

          <button className="mt-6 h-16 px-8 rounded-2xl bg-orange-600 text-white font-bold text-2xl">
            Pause System
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300 ${
          drawerOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out border-l border-orange-100
        w-full md:w-[760px]
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {selectedUser && (
          <>
            {/* HEADER */}
            <div className="sticky top-0 bg-white border-b border-orange-100 p-6 z-20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-5">
                  <img
                    src={selectedUser.avatar}
                    className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
                    alt=""
                  />

                  <div>
                    <h2 className="text-5xl font-black">
                      {selectedUser.name}
                    </h2>

                    <p className="mt-2 text-neutral-500 text-2xl">
                      #99283-AR • Standard Account
                    </p>
                  </div>
                </div>

                <button onClick={closeDrawer}>
                  <X size={40} className="text-neutral-500" />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-8">
              {/* TRUST */}
              <div className="rounded-[32px] border border-orange-200 bg-orange-50 p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black text-orange-900">
                    Trust Score Analysis
                  </h3>

                  <h2 className="text-6xl font-black text-orange-700">
                    88/100
                  </h2>
                </div>

                <div className="w-full h-5 rounded-full bg-neutral-200 overflow-hidden mt-6">
                  <div className="w-[88%] h-full bg-orange-500" />
                </div>

                <div className="flex flex-wrap gap-8 mt-7">
                  <div className="flex items-center gap-3 text-orange-800 font-semibold">
                    <ShieldCheck />
                    Identity Verified
                  </div>

                  <div className="flex items-center gap-3 text-red-600 font-semibold">
                    <AlertTriangle />
                    VPN Detected
                  </div>
                </div>
              </div>

              {/* DOCS */}
              <div>
                <h3 className="text-3xl font-black tracking-wide text-neutral-700 uppercase">
                  Verification Documents
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="font-bold text-neutral-600 mb-3">
                      ID CARD (FRONT)
                    </p>

                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                      className="rounded-[28px] h-[260px] w-full object-cover border border-orange-200"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="font-bold text-neutral-600 mb-3">
                      SELFIE COMPARISON
                    </p>

                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                        className="rounded-[28px] h-[260px] w-full object-cover border border-orange-200"
                        alt=""
                      />

                      <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-orange-500 text-white font-black text-xl">
                        94% MATCH
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FRAUD */}
              <div>
                <h3 className="text-3xl font-black tracking-wide uppercase text-neutral-700">
                  Fraud Intelligence
                </h3>

                <div className="space-y-5 mt-6">
                  <div className="rounded-[28px] border border-red-200 bg-red-50 p-6 flex gap-4">
                    <Globe className="text-red-600" size={40} />

                    <div>
                      <h4 className="text-3xl font-black text-red-700">
                        VPN/Proxy Detected
                      </h4>

                      <p className="text-neutral-600 mt-2 text-xl">
                        Connection originating from a known data center range.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 flex gap-4">
                    <MapPin className="text-orange-700" size={40} />

                    <div>
                      <h4 className="text-3xl font-black text-orange-800">
                        Location Discrepancy
                      </h4>

                      <p className="text-neutral-600 mt-2 text-xl">
                        ID issued in California; IP located in Berlin, Germany.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TIMELINE */}
              <div>
                <h3 className="text-3xl font-black tracking-wide uppercase text-neutral-700">
                  Behavioral Timeline
                </h3>

                <div className="mt-8 space-y-8">
                  {[
                    {
                      title: "Login from new device",
                      desc: "iPhone 15 Pro • Chrome 118 • 10 mins ago",
                      icon: <Smartphone />,
                    },
                    {
                      title: "Documents Uploaded",
                      desc: "2 files uploaded • 14 mins ago",
                      icon: <FileText />,
                    },
                    {
                      title: "Account Created",
                      desc: "Via Google OAuth • 1 hour ago",
                      icon: <UserRoundPlus />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-14 h-14 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-600 flex-shrink-0">
                        {item.icon}
                      </div>

                      <div>
                        <h4 className="text-3xl font-black">
                          {item.title}
                        </h4>

                        <p className="text-neutral-500 text-xl mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NOTES */}
              <div>
                <h3 className="text-3xl font-black tracking-wide uppercase text-neutral-700">
                  Internal Notes
                </h3>

                <textarea
                  placeholder="Add a note about this review..."
                  className="mt-5 w-full h-44 rounded-[28px] border border-orange-200 bg-orange-50 p-6 outline-none resize-none text-xl"
                />
              </div>

              {/* ACTIONS */}
              <div className="sticky bottom-0 bg-white py-5 space-y-4">
                <button className="w-full h-16 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-white font-black text-2xl">
                  Approve User
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <button className="h-16 rounded-2xl bg-red-100 text-red-700 font-black text-xl">
                    Reject
                  </button>

                  <button className="h-16 rounded-2xl border border-neutral-300 font-black text-xl">
                    Request Info
                  </button>
                </div>

                <button className="w-full h-16 rounded-2xl border border-neutral-300 font-black text-xl">
                  Escalate to Senior Manager
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
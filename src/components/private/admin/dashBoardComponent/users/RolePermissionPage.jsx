import React, { useMemo, useState } from "react";
import {
    AlertTriangle, BadgeCheck, ChevronDown, CircleAlert, Copy, FileText, Filter, Lock, Search, Shield, ShieldAlert,
    Sparkles, Trash2, User, Users, X, Check, Minus, Eye, MoreVertical, UserCog, Building2, Wallet, KeyRound, LineChart,
    ClipboardList, Settings, ShieldCheck, UserRound, BriefcaseBusiness, Plus, CheckCircle2, ChevronUp, Store, BarChart3, XCircle, ArrowUp
} from "lucide-react";

export default function RolePermissionPage() {
    const [roles, setRoles] = useState(initialRoles);
    const [selectedRole, setSelectedRole] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [criticalOnly, setCriticalOnly] = useState(false);

    const filteredRoles = useMemo(() => {
        return roles.filter((role) => {
            const matchesSearch = role.name.toLowerCase().includes(search.toLowerCase());
            const matchesCritical = criticalOnly ? role.risk >= 80 : true;
            return matchesSearch && matchesCritical;
        });
    }, [roles, search, criticalOnly]);

    const openDrawer = (role) => {
        setSelectedRole(role);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setTimeout(() => setSelectedRole(null), 300);
    };

    const togglePermission = (roleId, categoryName, permissionId) => {
        setRoles((prev) =>
            prev.map((role) => {
                if (role.id !== roleId) return role;

                return {
                    ...role,
                    permissions: role.permissions.map((group) => {
                        if (group.category !== categoryName) return group;

                        return {
                            ...group,
                            items: group.items.map((item) => {
                                if (item.id !== permissionId) return item;
                                return { ...item, enabled: !item.enabled };
                            }),
                        };
                    }),
                };
            })
        );

        setSelectedRole((prev) => {
            if (!prev || prev.id !== roleId) return prev;

            return {
                ...prev,
                permissions: prev.permissions.map((group) => {
                    if (group.category !== categoryName) return group;

                    return {
                        ...group,
                        items: group.items.map((item) => {
                            if (item.id !== permissionId) return item;
                            return { ...item, enabled: !item.enabled };
                        }),
                    };
                }),
            };
        });
    };

    return (
        <div className="min-h-screen bg-[#f6f7fb] p-4 md:p-7">
            {/* HEADER */}
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-5xl">
                        Roles & Permissions
                    </h1>
                    <p className="mt-2 text-lg text-neutral-500">
                        Manage admin access, operational authority, and platform security.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button className="rounded-2xl border border-orange-200 bg-white px-5 py-3 font-semibold text-neutral-700 transition hover:bg-orange-50">
                        <ShieldCheck className="mr-2 inline-block h-5 w-5" />
                        Security Scan
                    </button>

                    <button className="rounded-2xl border border-orange-200 bg-white px-5 py-3 font-semibold text-neutral-700 transition hover:bg-orange-50">
                        <FileText className="mr-2 inline-block h-5 w-5" />
                        Export Access Logs
                    </button>

                    <button className="rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600">
                        <PlusIcon />
                        Create Role
                    </button>
                </div>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-6">
                {[
                    { title: "Total Roles", value: "14", icon: Shield },
                    { title: "Active Admins", value: "42", icon: Users },
                    { title: "High Privilege", value: "5", icon: KeyRound },
                    { title: "Conflicts", value: "3", icon: AlertTriangle },
                    { title: "Modified", value: "12", icon: FileText },
                    { title: "Pending Approval", value: "19", icon: CircleAlert },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="rounded-[28px] border border-orange-200 bg-white p-5"
                    >
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-orange-50 p-3">
                                <item.icon className="size-6 text-orange-600" />
                            </div>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                                +2
                            </span>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm font-medium text-neutral-500">{item.title}</p>
                            <h3 className="mt-2 text-5xl font-black text-neutral-900">
                                {item.value}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* MAIN GRID */}
            <div className="mt-8 grid gap-6 xl:grid-cols-[320px_1fr]">
                {/* LEFT SIDEBAR */}
                <div className="space-y-6">
                    <div className="rounded-[30px] border border-orange-200 bg-white p-6">
                        <h3 className="text-2xl font-bold text-neutral-900">
                            Directory Filters
                        </h3>

                        <div className="mt-6 space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-neutral-600">
                                    Department
                                </label>
                                <button className="flex w-full items-center justify-between rounded-2xl border border-orange-200 px-4 py-4 text-left">
                                    All Departments
                                    <ChevronDown className="h-5 w-5" />
                                </button>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-neutral-600">
                                    Access Level
                                </label>
                                <button className="flex w-full items-center justify-between rounded-2xl border border-orange-200 px-4 py-4 text-left">
                                    All Levels
                                    <ChevronDown className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between border-t border-orange-100 pt-5">
                                <span className="font-semibold">Only Critical Roles</span>

                                <button
                                    onClick={() => setCriticalOnly(!criticalOnly)}
                                    className={`relative h-8 w-14 rounded-full transition ${criticalOnly ? "bg-orange-500" : "bg-neutral-300"
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 size-6 rounded-full bg-white transition ${criticalOnly ? "left-7" : "left-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <button className="w-full rounded-2xl bg-neutral-100 py-4 font-bold transition hover:bg-neutral-200">
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-orange-200 bg-white p-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-orange-600" />
                            <h3 className="text-2xl font-bold text-orange-700">
                                Security Insights
                            </h3>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-3xl border border-red-200 p-5">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="mt-1 text-red-500" />
                                    <div>
                                        <h4 className="font-bold">Overpowered Roles</h4>
                                        <p className="mt-2 text-neutral-500">
                                            3 verification officers have redundant financial
                                            permissions.
                                        </p>
                                        <button className="mt-4 font-bold text-orange-700">
                                            Apply Fix
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-orange-200 p-5">
                                <div className="flex items-start gap-3">
                                    <Shield className="mt-1 text-orange-600" />
                                    <div>
                                        <h4 className="font-bold">MFA Compliance</h4>
                                        <p className="mt-2 text-neutral-500">
                                            100% of super admins use biometric 2FA.
                                        </p>
                                        <button className="mt-4 font-bold text-orange-700">
                                            View Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6">
                    <div className="overflow-hidden rounded-[30px] border border-orange-200 bg-white">
                        <div className="flex flex-col gap-5 border-b border-orange-100 p-6 lg:flex-row lg:items-center lg:justify-between">
                            <h2 className="text-3xl font-bold">Roles Directory</h2>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center rounded-2xl bg-neutral-100 px-4">
                                    <Search className="text-neutral-400" />
                                    <input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search roles..."
                                        className="bg-transparent px-3 py-3 outline-none"
                                    />
                                </div>

                                <button className="rounded-2xl border border-orange-200 p-4">
                                    <Filter className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* TABLE DESKTOP */}
                        <div className="hidden xl:block">
                            <table className="w-full">
                                <thead className="border-b border-orange-100 text-left text-sm text-neutral-500">
                                    <tr>
                                        <th className="px-8 py-5">ROLE NAME</th>
                                        <th>DEPARTMENT</th>
                                        <th>ACCESS</th>
                                        <th>ASSIGNED</th>
                                        <th>STATUS</th>
                                        <th className="pr-8 text-right">ACTIONS</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredRoles.map((role) => (
                                        <tr
                                            key={role.id}
                                            className="border-b border-orange-100 transition hover:bg-orange-50/30"
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="rounded-2xl bg-orange-50 p-3">
                                                        <Shield className="text-orange-600" />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-xl font-bold">{role.name}</h4>
                                                        <p className="text-neutral-500">
                                                            {role.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="font-medium text-neutral-600">
                                                {role.department}
                                            </td>

                                            <td>
                                                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                                                    {role.access}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex -space-x-3">
                                                        <div className="size-10 rounded-full border-2 border-white bg-neutral-300" />
                                                        <div className="size-10 rounded-full border-2 border-white bg-neutral-400" />
                                                    </div>
                                                    <span className="font-semibold text-neutral-500">
                                                        +{role.assigned}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <span
                                                    className={`font-bold ${role.status === "Active"
                                                        ? "text-green-600"
                                                        : "text-orange-600"
                                                        }`}
                                                >
                                                    ● {role.status}
                                                </span>
                                            </td>

                                            <td className="pr-8 text-right">
                                                <button
                                                    onClick={() => openDrawer(role)}
                                                    className="rounded-2xl bg-neutral-100 px-5 py-3 font-semibold transition hover:bg-orange-500 hover:text-white"
                                                >
                                                    Review
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex items-center justify-between p-8">
                                <p className="text-neutral-600 font-medium">
                                    Showing 1-10 of 14 roles
                                </p>

                                <div className="flex gap-3">
                                    <button className="rounded-xl border border-orange-200 px-4 py-3">
                                        Previous
                                    </button>
                                    <button className="rounded-xl bg-orange-500 px-4 py-3 font-bold text-white">
                                        1
                                    </button>
                                    <button className="rounded-xl border border-orange-200 px-4 py-3">
                                        2
                                    </button>
                                    <button className="rounded-xl border border-orange-200 px-4 py-3">
                                        3
                                    </button>
                                    <button className="rounded-xl border border-orange-200 px-4 py-3">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE CARDS */}
                        <div className="space-y-4 p-4 xl:hidden">
                            {filteredRoles.map((role) => (
                                <div
                                    key={role.id}
                                    className="rounded-[28px] border border-orange-100 p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold">{role.name}</h3>
                                            <p className="mt-1 text-neutral-500">
                                                ID: {role.roleId} • Created {role.created}
                                            </p>
                                        </div>

                                        <span
                                            className={`rounded-full px-4 py-2 text-sm font-bold ${role.access === "Full Access"
                                                ? "bg-red-100 text-red-700"
                                                : role.access === "Restricted"
                                                    ? "bg-slate-100 text-slate-600"
                                                    : "bg-neutral-100 text-neutral-600"
                                                }`}
                                        >
                                            {role.access}
                                        </span>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex -space-x-3">
                                                <div className="size-12 rounded-full bg-neutral-300 border-2 border-white" />
                                                <div className="size-12 rounded-full bg-neutral-400 border-2 border-white" />
                                            </div>

                                            <span className="font-bold text-neutral-700">
                                                {role.assigned} Assigned
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => openDrawer(role)}
                                            className="rounded-2xl bg-neutral-100 px-5 py-3 font-semibold"
                                        >
                                            Review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AUDIT FEED */}
                    <div className="rounded-[30px] border border-orange-200 bg-white p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold">Audit Feed</h2>
                            <button className="font-bold text-orange-700">
                                View Full Audit Trail
                            </button>
                        </div>

                        <div className="mt-8 space-y-8">
                            {[
                                {
                                    title: "Role Edited: Verification Officer",
                                    description:
                                        'Alex Chen updated "Legitimacy Check" permissions.',
                                    color: "blue",
                                    time: "2 mins ago",
                                },
                                {
                                    title: "Failed Access Attempt",
                                    description:
                                        "Unauthorized payout settings access detected.",
                                    color: "red",
                                    time: "45 mins ago",
                                },
                                {
                                    title: "New Role Created",
                                    description:
                                        "Fraud analyst role created for compliance.",
                                    color: "green",
                                    time: "2 hours ago",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between gap-4 border-b border-orange-100 pb-6"
                                >
                                    <div className="flex gap-4">
                                        <div
                                            className={`mt-1 flex size-14 items-center justify-center rounded-full ${item.color === "blue"
                                                ? "bg-blue-100"
                                                : item.color === "red"
                                                    ? "bg-red-100"
                                                    : "bg-green-100"
                                                }`}
                                        >
                                            {item.color === "blue" ? (
                                                <FileText className="text-blue-600" />
                                            ) : item.color === "red" ? (
                                                <AlertTriangle className="text-red-500" />
                                            ) : (
                                                <Users className="text-green-600" />
                                            )}
                                        </div>

                                        <div>
                                            <h4 className="text-2xl font-bold">{item.title}</h4>
                                            <p className="mt-2 text-neutral-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="whitespace-nowrap text-neutral-500">
                                        {item.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between mb-5">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-3xl">
                            Roles & Permissions
                        </h1>
                        <p className="mt-2 text-lg text-neutral-500">
                            Manage admin access, operational authority, and platform security.
                        </p>
                    </div>

                </div>
                <PermissionMatrix />
            </div>
            {/* bottom last section */}
            <section className="mt-10">
                {/* HEADER */}
                <div className="mb-6">
                    <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">
                        Role Distribution
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.4fr_.65fr_.65fr]">
                    {/* SECURITY INSIGHT */}
                    <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-7 sm:p-10">
                        {/* WATERMARK ICON */}
                        <div className="absolute bottom-[-40px] right-[-40px] opacity-5">
                            <Shield className="h-72 w-72 text-black" />
                        </div>

                        <div className="relative z-10">
                            <p className="text-sm font-black uppercase tracking-[0.15em] text-orange-700 sm:text-base">
                                Security Insight
                            </p>

                            <h3 className="mt-4 text-4xl font-black text-neutral-900 sm:text-5xl">
                                Active Privileges
                            </h3>

                            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                                84% of your organization operates under the
                                {" "}
                                <span className="font-bold">'Support'</span>
                                {" "}
                                role. Consider periodic audits of Super Admin
                                accounts.
                            </p>

                            <button className="mt-8 rounded-2xl border border-orange-200 bg-white px-7 py-4 text-xl font-bold text-neutral-900 transition-all hover:bg-orange-50">
                                Review Logs
                            </button>
                        </div>
                    </div>

                    {/* SUPER ADMINS */}
                    <div className="rounded-[32px] border border-orange-100 bg-white p-7 sm:p-10">
                        <div className="flex items-start justify-between">
                            <p className="text-sm font-black uppercase tracking-[0.15em] text-neutral-500 sm:text-base">
                                Super Admins
                            </p>

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                                <ShieldCheck className="h-8 w-8 text-orange-700" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-6xl font-black text-neutral-900">
                                04
                            </h3>

                            <div className="mt-5 flex items-center gap-2 text-green-500">
                                <ArrowUp className="h-5 w-5" />

                                <span className="text-2xl font-bold">
                                    Stable
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* POLICY VIOLATIONS */}
                    <div className="rounded-[32px] border border-orange-100 bg-white p-7 sm:p-10">
                        <div className="flex items-start justify-between">
                            <p className="text-sm font-black uppercase tracking-[0.15em] text-neutral-500 sm:text-base">
                                Policy Violations
                            </p>

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
                                <ShieldAlert className="h-8 w-8 text-red-600" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-6xl font-black text-neutral-900">
                                00
                            </h3>

                            <p className="mt-5 text-2xl font-semibold text-neutral-500">
                                Last 30 days
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* DRAWER BACKDROP */}
            <div
                onClick={closeDrawer}
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition duration-300 ${drawerOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            />

            {/* DRAWER */}
            <div
                className={`fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto border-l border-orange-100 bg-white shadow-2xl transition-transform duration-500 ease-out md:w-[760px] ${drawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {selectedRole && (
                    <>
                        <div className="sticky top-0 z-20 border-b border-orange-100 bg-white p-6">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
                                        Role Details • System Internal
                                    </p>

                                    <h2 className="mt-2 text-5xl font-black">
                                        {selectedRole.name}
                                    </h2>

                                    <p className="mt-2 text-lg text-neutral-500">
                                        {selectedRole.department} Department
                                    </p>
                                </div>

                                <button
                                    onClick={closeDrawer}
                                    className="rounded-2xl p-3 transition hover:bg-neutral-100"
                                >
                                    <X className="h-8 w-8" />
                                </button>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <div className="rounded-2xl bg-red-100 px-5 py-3 font-bold text-red-700">
                                    Risk Score: {selectedRole.risk}/100
                                </div>

                                <button className="rounded-2xl border border-orange-200 p-3">
                                    <Copy className="h-5 w-5" />
                                </button>

                                <button className="rounded-2xl border border-orange-200 p-3">
                                    <FileText className="h-5 w-5" />
                                </button>

                                <button className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-white">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8 p-6">
                            {/* ASSIGNED ADMINS */}
                            <div>
                                <div className="mb-5 flex items-center justify-between">
                                    <h3 className="text-3xl font-bold">Assigned Admins</h3>
                                    <button className="font-bold text-orange-700">
                                        + Assign Member
                                    </button>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    {[
                                        "Marcus Chen",
                                        "Sarah Jenkins",
                                        "Others",
                                    ].map((name, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 rounded-3xl border border-orange-200 p-4"
                                        >
                                            <div className="size-16 rounded-2xl bg-neutral-300" />
                                            <div>
                                                <h4 className="font-bold">{name}</h4>
                                                <p className="text-neutral-500">
                                                    {index === 0
                                                        ? "Senior Verifier"
                                                        : index === 1
                                                            ? "Authenticator"
                                                            : "Active roles"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PERMISSIONS */}
                            <div>
                                <h3 className="mb-6 text-3xl font-bold">Permission Settings</h3>

                                <div className="space-y-6">
                                    {selectedRole.permissions.map((group, groupIndex) => (
                                        <div
                                            key={groupIndex}
                                            className="rounded-[28px] bg-neutral-50 p-5"
                                        >
                                            <div className="mb-5 flex items-center gap-3">
                                                <Lock className="text-neutral-500" />
                                                <h4 className="text-lg font-bold uppercase tracking-[0.18em] text-neutral-500">
                                                    {group.category}
                                                </h4>
                                            </div>

                                            <div className="space-y-4">
                                                {group.items.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="flex items-center justify-between gap-5 rounded-2xl bg-white p-5"
                                                    >
                                                        <p className="font-semibold">{item.label}</p>

                                                        <button
                                                            onClick={() =>
                                                                togglePermission(
                                                                    selectedRole.id,
                                                                    group.category,
                                                                    item.id
                                                                )
                                                            }
                                                            className={`relative h-8 w-16 rounded-full transition ${item.enabled ? "bg-orange-500" : "bg-orange-100"
                                                                }`}
                                                        >
                                                            <div
                                                                className={`absolute top-1 size-6 rounded-full bg-white transition ${item.enabled ? "left-9" : "left-1"
                                                                    }`}
                                                            />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI RISK */}
                            <div className="rounded-[28px] border border-red-200 bg-red-50 p-6">
                                <div className="flex gap-4">
                                    <div className="rounded-2xl bg-white p-3">
                                        <ShieldAlert className="text-red-500" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-red-700">
                                            Excessive Authority Detected
                                        </h3>

                                        <p className="mt-3 text-lg text-red-600">
                                            This role currently allows both approval and rejection of
                                            high-value items without secondary approval.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sticky bottom-0 border-t border-orange-100 bg-white p-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <button
                                    onClick={closeDrawer}
                                    className="flex items-center gap-2 font-bold text-neutral-600"
                                >
                                    <X className="h-5 w-5" />
                                    Close Drawer
                                </button>

                                <div className="flex flex-wrap gap-3">
                                    <button className="rounded-2xl border border-orange-200 px-6 py-3 font-bold">
                                        Cancel
                                    </button>

                                    <button className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/20">
                                        Apply Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function PlusIcon() {
    return <Plus className="mr-2 inline-block h-5 w-5" />;
}


function PermissionMatrix() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const renderStatus = (status) => {
        switch (status) {
            case "allowed":
                return (
                    <div className="flex justify-center">
                        <CheckCircle2 className="h-7 w-7 text-green-500" />
                    </div>
                );

            case "restricted":
                return (
                    <div className="flex justify-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-red-500">
                            <span className="text-sm font-black text-red-500">×</span>
                        </div>
                    </div>
                );

            case "full":
                return (
                    <div className="flex justify-center">
                        <BadgeCheck className="h-7 w-7 text-green-500" />
                    </div>
                );

            default:
                return (
                    <div className="flex justify-center">
                        <Minus className="h-7 w-7 text-neutral-300" />
                    </div>
                );
        }
    };

    const renderMobileStatus = (status) => {
        switch (status) {
            case "allowed":
                return (
                    <CheckCircle2 className="h-9 w-9 rounded-full bg-green-500 p-1 text-white" />
                );

            case "restricted":
                return (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-red-500 bg-red-50">
                        <span className="text-lg font-black text-red-500">×</span>
                    </div>
                );

            case "full":
                return (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                        <BadgeCheck className="h-5 w-5 text-white" />
                    </div>
                );

            default:
                return <Minus className="h-8 w-8 text-neutral-300" />;
        }
    };

    return (
        <div className="w-full">
            {/* DESKTOP */}
            <div className="hidden overflow-hidden rounded-[32px] border border-orange-200 bg-white lg:block">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1200px] border-collapse">
                        <thead>
                            <tr className="border-b border-orange-100">
                                <th className="w-[320px] border-r border-orange-100 px-8 py-10 text-left">
                                    <span className="text-sm font-black uppercase tracking-[0.18em] text-neutral-500">
                                        Modules / Roles
                                    </span>
                                </th>

                                {roles.map((role, index) => (
                                    <th
                                        key={index}
                                        className={`px-6 py-10 text-center ${role.name === "Super Admin"
                                            ? "bg-orange-50"
                                            : ""
                                            }`}
                                    >
                                        <h3
                                            className={`text-4xl font-black ${role.name === "Super Admin"
                                                ? "text-orange-700"
                                                : "text-neutral-900"
                                                }`}
                                        >
                                            {role.name}
                                        </h3>

                                        <p
                                            className={`mt-2 text-sm font-semibold ${role.name === "Super Admin"
                                                ? "text-orange-600"
                                                : "text-neutral-500"
                                                }`}
                                        >
                                            {role.subtitle}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {permissionData.map((module) => (
                                <tr
                                    key={module.id}
                                    className="border-b border-orange-100"
                                >
                                    <td className="border-r border-orange-100 px-8 py-10">
                                        <div className="flex items-center gap-5">
                                            <module.icon className="h-8 w-8 text-neutral-500" />

                                            <h3 className="text-3xl font-bold text-neutral-900">
                                                {module.title}
                                            </h3>
                                        </div>
                                    </td>

                                    {roles.map((role, index) => (
                                        <td
                                            key={index}
                                            className={`px-6 py-10 ${role.name === "Super Admin"
                                                ? "bg-orange-50/50"
                                                : ""
                                                }`}
                                        >
                                            {renderStatus(
                                                module.permissions[role.name]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MOBILE */}
            <div className="space-y-5 lg:hidden">
                {/* HEADER CARD */}
                <div className="rounded-[32px] border border-orange-100 bg-white p-7">
                    <h2 className="text-4xl font-black text-neutral-900">
                        Role Management
                    </h2>

                    <p className="mt-4 text-2xl leading-relaxed text-neutral-700">
                        Review and manage granular access controls across
                        all system modules for administrative roles.
                    </p>
                </div>

                {/* ACCORDION */}
                {permissionData.map((module) => {
                    const isOpen = openAccordion === module.id;

                    return (
                        <div
                            key={module.id}
                            className="overflow-hidden rounded-[32px] border border-orange-100 bg-white"
                        >
                            <button
                                onClick={() =>
                                    setOpenAccordion(isOpen ? null : module.id)
                                }
                                className="flex w-full items-center justify-between px-6 py-7"
                            >
                                <div className="flex items-center gap-4">
                                    <module.icon className="h-10 w-10 text-orange-500" />

                                    <h3 className="text-3xl font-black text-neutral-900">
                                        {module.title}
                                    </h3>
                                </div>

                                {isOpen ? (
                                    <ChevronUp className="h-8 w-8 text-neutral-900" />
                                ) : (
                                    <ChevronDown className="h-8 w-8 text-neutral-900" />
                                )}
                            </button>

                            {isOpen && (
                                <div className="border-t border-orange-100 px-5 py-5">
                                    <div className="space-y-4">
                                        {roles.map((role, index) => {
                                            const status =
                                                module.permissions[role.name];

                                            return (
                                                <div
                                                    key={index}
                                                    className={`flex items-center justify-between rounded-2xl px-5 py-5 ${role.name === "Super Admin"
                                                        ? "bg-orange-50"
                                                        : "bg-neutral-50"
                                                        }`}
                                                >
                                                    <div>
                                                        <h4
                                                            className={`text-2xl font-bold ${role.name === "Super Admin"
                                                                ? "text-orange-700"
                                                                : "text-neutral-900"
                                                                }`}
                                                        >
                                                            {role.name}
                                                        </h4>

                                                        <p className="mt-1 text-lg text-neutral-500">
                                                            {role.subtitle}
                                                        </p>
                                                    </div>

                                                    {renderMobileStatus(status)}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* FOOTER */}
                <div className="rounded-[32px] bg-[#eef1f7] p-6">
                    <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-white p-3">
                            <ShieldCheck className="h-8 w-8 text-neutral-600" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-700">
                                Secured by SoleAdmin
                            </h3>

                            <p className="mt-2 text-lg text-neutral-600">
                                Last updated: Oct 24, 2023 • 14:32 UTC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {legendItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-5 rounded-[28px] border border-orange-100 bg-white px-5 py-5 sm:px-6 sm:py-6"
                        >
                            {/* ICON */}
                            <div
                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.iconClass}`}
                            >
                                <Icon className="h-8 w-8" />
                            </div>

                            {/* CONTENT */}
                            <div>
                                <h3 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-lg text-neutral-500 sm:text-xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}


const initialRoles = [
    {
        id: 1,
        name: "Super Administrator",
        roleId: "ROLE-001",
        department: "System",
        access: "Full Access",
        status: "Active",
        created: "Feb 12",
        assigned: 4,
        risk: 95,
        description: "All actions permitted",
        category: "SYSTEM",
        permissions: [
            {
                category: "User Management",
                items: [
                    { id: "view_users", label: "View Users", enabled: true },
                    { id: "suspend_users", label: "Suspend Users", enabled: true },
                    { id: "delete_users", label: "Delete Users", enabled: true },
                ],
            },
            {
                category: "Commerce & Orders",
                items: [
                    { id: "update_orders", label: "Update Order Status", enabled: true },
                    { id: "process_refunds", label: "Process Refunds", enabled: true },
                ],
            },
            {
                category: "Verification Protocol",
                items: [
                    { id: "approve_auth", label: "Approve Authenticity", enabled: true },
                    { id: "reject_high_value", label: "Reject Items (High Value)", enabled: true },
                    { id: "edit_logs", label: "Edit Verification Logs", enabled: true },
                    { id: "override_ai", label: "Override AI Flags", enabled: true },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Finance Analyst",
        roleId: "ROLE-042",
        department: "Finance",
        access: "Restricted",
        status: "Active",
        created: "Mar 05",
        assigned: 12,
        risk: 61,
        description: "Payments & payouts monitoring",
        category: "FINANCE",
        permissions: [
            {
                category: "Financial Access",
                items: [
                    { id: "view_reports", label: "View Financial Reports", enabled: true },
                    { id: "export_logs", label: "Export Access Logs", enabled: false },
                    { id: "payouts", label: "Access Payout Data", enabled: false },
                ],
            },
            {
                category: "Analytics",
                items: [
                    { id: "view_analytics", label: "View Analytics", enabled: true },
                    { id: "export_analytics", label: "Export Analytics", enabled: false },
                ],
            },
        ],
    },
    {
        id: 3,
        name: "Verification Officer",
        roleId: "ROLE-077",
        department: "Operations",
        access: "Restricted",
        status: "Under Review",
        created: "Apr 22",
        assigned: 8,
        risk: 88,
        description: "Legitimacy checks",
        category: "OPERATIONS",
        permissions: [
            {
                category: "Verification Access",
                items: [
                    { id: "review_docs", label: "Review Documents", enabled: true },
                    { id: "approve_kyc", label: "Approve KYC", enabled: true },
                    { id: "escalate_cases", label: "Escalate Cases", enabled: true },
                    { id: "override_ai", label: "Override AI Flags", enabled: false },
                ],
            },
            {
                category: "Audit Logs",
                items: [
                    { id: "view_audit", label: "View Audit Trail", enabled: true },
                    { id: "edit_audit", label: "Edit Audit Trail", enabled: false },
                ],
            },
        ],
    },
    {
        id: 4,
        name: "Fraud Analyst",
        roleId: "ROLE-088",
        department: "Compliance",
        access: "View Only",
        status: "Active",
        created: "May 11",
        assigned: 15,
        risk: 34,
        description: "Risk assessment",
        category: "COMPLIANCE",
        permissions: [
            {
                category: "Risk Monitoring",
                items: [
                    { id: "view_risk", label: "View Risk Reports", enabled: true },
                    { id: "flag_accounts", label: "Flag Suspicious Accounts", enabled: false },
                ],
            },
            {
                category: "System Settings",
                items: [
                    { id: "settings_view", label: "View System Settings", enabled: false },
                    { id: "settings_edit", label: "Edit System Settings", enabled: false },
                ],
            },
        ],
    },
];




const permissionData = [
    {
        id: 1,
        title: "User Management",
        icon: User,
        permissions: {
            Support: "allowed",
            Moderator: "allowed",
            Finance: "disabled",
            Security: "disabled",
            "Super Admin": "full",
        },
    },
    {
        id: 2,
        title: "Seller Management",
        icon: Store,
        permissions: {
            Support: "allowed",
            Moderator: "allowed",
            Finance: "disabled",
            Security: "disabled",
            "Super Admin": "full",
        },
    },
    {
        id: 3,
        title: "Refund Controls",
        icon: Wallet,
        permissions: {
            Support: "restricted",
            Moderator: "disabled",
            Finance: "allowed",
            Security: "disabled",
            "Super Admin": "full",
        },
    },
    {
        id: 4,
        title: "Verification Access",
        icon: Shield,
        permissions: {
            Support: "disabled",
            Moderator: "allowed",
            Finance: "disabled",
            Security: "allowed",
            "Super Admin": "full",
        },
    },
    {
        id: 5,
        title: "Analytics",
        icon: BarChart3,
        permissions: {
            Support: "allowed",
            Moderator: "allowed",
            Finance: "allowed",
            Security: "allowed",
            "Super Admin": "full",
        },
    },
    {
        id: 6,
        title: "System Settings",
        icon: Settings,
        permissions: {
            Support: "restricted",
            Moderator: "restricted",
            Finance: "disabled",
            Security: "allowed",
            "Super Admin": "full",
        },
    },
    {
        id: 7,
        title: "Audit Logs",
        icon: ClipboardList,
        permissions: {
            Support: "disabled",
            Moderator: "disabled",
            Finance: "disabled",
            Security: "allowed",
            "Super Admin": "full",
        },
    },
];

const roles = [
    {
        name: "Support",
        subtitle: "Customer Facing",
    },
    {
        name: "Moderator",
        subtitle: "Content Control",
    },
    {
        name: "Finance",
        subtitle: "Treasury & Tax",
    },
    {
        name: "Security",
        subtitle: "Network & Access",
    },
    {
        name: "Super Admin",
        subtitle: "Full Authority",
    },
];

const legendItems = [
    {
        title: "Allowed",
        description: "Full read/write/delete access.",
        icon: CheckCircle2,
        iconClass:
            "bg-green-50 text-green-500",
    },
    {
        title: "Disabled",
        description: "Module hidden for this role.",
        icon: Minus,
        iconClass:
            "bg-neutral-100 text-neutral-500",
    },
    {
        title: "Restricted",
        description: "Explicitly blocked by policy.",
        icon: XCircle,
        iconClass:
            "bg-red-50 text-red-500",
    },
];
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ListChecks, BarChart2, AlertTriangle, Settings, ShieldCheck, ShoppingBag, Car, Briefcase, TrendingUp, MessageSquare as MessageSquareWarning, DollarSign, PackageCheck } from 'lucide-react';

const AdminDashboardPage = () => {
  const stats = [
    { title: "Utilisateurs Actifs", value: "1,250", icon: <Users className="h-8 w-8 text-blue-400" />, trend: "+5% ce mois", color: "blue" },
    { title: "Annonces en Attente", value: "72", icon: <ListChecks className="h-8 w-8 text-yellow-400" />, trend: "Urgents: 5", color: "yellow" },
    { title: "Transactions (30j)", value: "15.2M FCFA", icon: <DollarSign className="h-8 w-8 text-green-400" />, trend: "+12%", color: "green" },
    { title: "Rapports de Fraude", value: "8", icon: <MessageSquareWarning className="h-8 w-8 text-red-400" />, trend: "À investiguer", color: "red" },
  ];

  const quickActions = [
    { label: "Gérer Annonces Immobilières", icon: <ListChecks className="mr-3 h-5 w-5" />, color: "blue", link: "#immobilier-admin" },
    { label: "Gérer Annonces Automobiles", icon: <Car className="mr-3 h-5 w-5" />, color: "red", link: "#automobile-admin" },
    { label: "Gérer Services Professionnels", icon: <Briefcase className="mr-3 h-5 w-5" />, color: "purple", link: "#services-admin" },
    { label: "Gérer Marketplace Générale", icon: <ShoppingBag className="mr-3 h-5 w-5" />, color: "yellow", link: "#marketplace-admin" },
    { label: "Vérifications Utilisateurs (KYC)", icon: <ShieldCheck className="mr-3 h-5 w-5" />, color: "green", link: "#kyc-admin" },
    { label: "Modération de Contenu", icon: <AlertTriangle className="mr-3 h-5 w-5" />, color: "orange", link: "#moderation-admin" },
    { label: "Statistiques & Rapports", icon: <BarChart2 className="mr-3 h-5 w-5" />, color: "teal", link: "#reports-admin" },
    { label: "Paramètres de la Plateforme", icon: <Settings className="mr-3 h-5 w-5" />, color: "gray", link: "#settings-admin" },
  ];

  const recentActivities = [
    { id: 1, type: "Nouvelle annonce", item: "Villa de luxe à Cocody", user: "AdminUserX", time: "5 min", category: "Immobilier", status: "Approuvée" },
    { id: 2, type: "Nouvel utilisateur", item: "Moussa Dembélé", user: "Système", time: "15 min", category: "Utilisateur", status: "En attente KYC" },
    { id: 3, type: "Transaction", item: "Toyota Prado 2021", value: "25M FCFA", user: "AcheteurY & VendeurZ", time: "30 min", category: "Automobile", status: "Complétée" },
    { id: 4, type: "Signalement", item: "Annonce 'iPhone 15 Pro Max Neuf'", user: "UtilisateurA", time: "1h", category: "Marketplace", status: "En cours d'examen" },
    { id: 5, type: "Boost activé", item: "Service de Plomberie Express", user: "PlombierPro", time: "2h", category: "Services", status: "VIP - 30 jours" },
  ];

  const getIconForActivity = (category, status) => {
    if (status === "Approuvée" || status === "Complétée" || status.startsWith("VIP")) return <PackageCheck className="h-5 w-5 text-green-400" />;
    if (status === "En attente KYC" || status === "En cours d'examen") return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
    
    switch(category) {
      case "Immobilier": return <ListChecks className="h-5 w-5 text-blue-400" />;
      case "Automobile": return <Car className="h-5 w-5 text-red-400" />;
      case "Services": return <Briefcase className="h-5 w-5 text-purple-400" />;
      case "Marketplace": return <ShoppingBag className="h-5 w-5 text-yellow-400" />;
      case "Utilisateur": return <Users className="h-5 w-5 text-teal-400" />;
      default: return <ShieldCheck className="h-5 w-5 text-gray-400" />;
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Tableau de Bord Administrateur <span className="gradient-text">Benome</span></h1>
        <p className="text-md sm:text-lg text-slate-400">Vue d'ensemble et gestion de la marketplace.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-700 hover:border-${stat.color}-500 transition-colors`}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-md font-semibold text-slate-300">{stat.title}</h2>
              {stat.icon}
            </div>
            <p className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</p>
            <div className="flex items-center text-xs text-slate-400">
              <TrendingUp className={`mr-1 h-4 w-4 text-${stat.color}-400`} />
              {stat.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700"
        >
          <h2 className="text-xl font-semibold mb-6">Actions Rapides</h2>
          <div className="space-y-3">
            {quickActions.map(action => (
              <button key={action.label} className={`w-full flex items-center justify-start p-3 bg-${action.color}-600/10 hover:bg-${action.color}-600/20 text-${action.color}-300 rounded-lg transition-colors`}>
                {action.icon} {action.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700"
        >
          <h2 className="text-xl font-semibold mb-6">Activité Récente</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start p-3 bg-slate-700/50 rounded-lg">
                <div className={`p-2 bg-${activity.status === "Approuvée" || activity.status === "Complétée" || activity.status.startsWith("VIP") ? 'green' : (activity.status === "En attente KYC" || activity.status === "En cours d'examen" ? 'yellow' : 'slate')}-600/30 rounded-full mr-3`}>
                  {getIconForActivity(activity.category, activity.status)}
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-slate-200 text-sm">
                    <span className="font-bold">{activity.type}:</span> {activity.item} 
                    {activity.value && <span className="text-green-400"> ({activity.value})</span>}
                  </p>
                  <p className="text-xs text-slate-400">
                    Il y a {activity.time} par {activity.user} - <span className={`font-semibold text-${activity.status === "Approuvée" || activity.status === "Complétée" || activity.status.startsWith("VIP") ? 'green' : (activity.status === "En attente KYC" || activity.status === "En cours d'examen" ? 'yellow' : 'slate')}-400`}>{activity.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
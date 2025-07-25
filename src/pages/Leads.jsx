// import React, { useState } from 'react';
// import { Plus, Search, Bookmark, BookmarkCheck, Heart, MessageCircle, Share, ChevronLeft, ChevronRight, X, Building, MapPin, Phone, Mail, User, Calendar, Tag, Filter, Menu, Star, TrendingUp, Clock, Eye, ArrowRight } from 'lucide-react';
// import Sidebar from '../components/Sidebar';

// const Leads = () => {
//   const [activeTab, setActiveTab] = useState('browse');
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [savedLeads, setSavedLeads] = useState(new Set());
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [leads, setLeads] = useState([
//     {
//       id: 1,
//       type: 'Producer',
//       companyName: 'TechCorp Manufacturing',
//       category: 'Electronics & Electronics',
//       title: 'High-Quality Circuit Boards Available',
//       description: 'We manufacture premium circuit boards for various electronic applications with ISO certification.',
//       specificDetails: 'ISO 9001 certified, RoHS compliant, Lead-free soldering',
//       profileImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
//       productImages: [
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
//         'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop'
//       ],
//       location: 'Mumbai, Maharashtra',
//       contact: {
//         phone: '+91 98765 43210',
//         email: 'contact@techcorp.com'
//       },
//       postedDate: '2024-01-15',
//       likes: 24,
//       comments: 8,
//       views: 156,
//       rating: 4.8,
//       isVerified: true,
//       isTrending: true
//     },
//     {
//       id: 2,
//       type: 'Provider',
//       companyName: 'Premium Logistics Solutions',
//       category: 'Industrial Supplies',
//       title: 'Complete Supply Chain Management Services',
//       description: 'End-to-end logistics solutions for manufacturing industries with real-time tracking.',
//       specificDetails: 'Pan-India coverage, 24/7 support, Temperature-controlled storage',
//       profileImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
//       productImages: [
//         'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop',
//         'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
//       ],
//       location: 'Delhi, India',
//       contact: {
//         phone: '+91 87654 32109',
//         email: 'info@premiumlogistics.com'
//       },
//       postedDate: '2024-01-12',
//       likes: 31,
//       comments: 12,
//       views: 203,
//       rating: 4.6,
//       isVerified: false,
//       isTrending: false
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     type: 'Producer',
//     companyName: '',
//     category: '',
//     title: '',
//     description: '',
//     specificDetails: '',
//     profileImage: '',
//     productImages: [],
//     location: '',
//     phone: '',
//     email: ''
//   });

//   const categories = [
//     'Textiles & Apparel', 'Leather & Footwear', 'Handicraft Products', 'Furniture & Furnishings',
//     'Sporting Goods', 'Hotels & Hospitality', 'Medical Supplies', 'Electricals & Electronics',
//     'Automobile Components', 'Building Hardware', 'Industrial Supplies', 'Metals & Machinery'
//   ];

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newLead = {
//       id: leads.length + 1,
//       ...formData,
//       postedDate: new Date().toISOString().split('T')[0],
//       likes: 0,
//       comments: 0,
//       views: 0,
//       rating: 0,
//       isVerified: false,
//       isTrending: false,
//       contact: {
//         phone: formData.phone,
//         email: formData.email
//       }
//     };
//     setLeads([newLead, ...leads]);
//     setFormData({
//       type: 'Producer',
//       companyName: '',
//       category: '',
//       title: '',
//       description: '',
//       specificDetails: '',
//       profileImage: '',
//       productImages: [],
//       location: '',
//       phone: '',
//       email: ''
//     });
//     setActiveTab('browse');
//   };

//   const handleImageUpload = (field, index = null) => {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/*';
//     input.onchange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           if (field === 'productImages') {
//             const newImages = [...formData.productImages];
//             if (index !== null) {
//               newImages[index] = e.target.result;
//             } else {
//               newImages.push(e.target.result);
//             }
//             setFormData({ ...formData, productImages: newImages });
//           } else {
//             setFormData({ ...formData, [field]: e.target.result });
//           }
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//     input.click();
//   };

//   const toggleSaveLead = (leadId) => {
//     const newSavedLeads = new Set(savedLeads);
//     if (newSavedLeads.has(leadId)) {
//       newSavedLeads.delete(leadId);
//     } else {
//       newSavedLeads.add(leadId);
//     }
//     setSavedLeads(newSavedLeads);
//   };

//   const openLeadDetail = (lead) => {
//     setSelectedLead(lead);
//     setCurrentImageIndex(0);
//   };

//   const nextImage = () => {
//     if (selectedLead && selectedLead.productImages.length > 0) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedLead.productImages.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedLead && selectedLead.productImages.length > 0) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedLead.productImages.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <div className="mt-8 bg-gray-50">
//       {/* Content Area with Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//         {/* Page Title and Navigation */}
//         <div className="mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Leads</h1>
//               <p className="text-gray-600">Discover and connect with business opportunities</p>
//             </div>

//             <button
//               onClick={() => setActiveTab('create')}
//               className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
//               style={{ backgroundColor: '#F37E3A' }}
//             >
//               <Plus size={20} className="mr-2" />
//               Add New Lead
//             </button>
//           </div>

//           {/* Tab Navigation */}
//           <div className="mt-8 border-b border-gray-200">
//             <nav className="flex space-x-8">
//               <button
//                 onClick={() => setActiveTab('browse')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === 'browse' 
//                     ? 'border-blue-500 text-blue-600' 
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//                 style={activeTab === 'browse' ? { borderColor: '#288EC2', color: '#288EC2' } : {}}
//               >
//                 Browse Leads
//               </button>
//               <button
//                 onClick={() => setActiveTab('saved')}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === 'saved' 
//                     ? 'border-blue-500 text-blue-600' 
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//                 style={activeTab === 'saved' ? { borderColor: '#288EC2', color: '#288EC2' } : {}}
//               >
//                 Saved Leads
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* Create Lead Form */}
//         {activeTab === 'create' && (
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//               {/* Form Header */}
//               <div className="px-8 py-6 border-b border-gray-200" style={{ backgroundColor: '#F8F9FA' }}>
//                 <h2 className="text-2xl font-bold text-gray-900">Create New Lead</h2>
//                 <p className="text-gray-600 mt-1">Share your business opportunity with our network</p>
//               </div>

//               <form onSubmit={handleFormSubmit} className="p-8 space-y-8">
//                 {/* Lead Type Selection */}
//                 <div>
//                   <label className="block text-lg font-semibold text-gray-900 mb-4">
//                     What type of lead are you posting? <span className="text-red-500">*</span>
//                   </label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div 
//                       className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
//                         formData.type === 'Producer' 
//                           ? 'border-blue-500 shadow-lg' 
//                           : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
//                       }`}
//                       style={formData.type === 'Producer' ? { borderColor: '#288EC2' } : {}}
//                       onClick={() => setFormData({ ...formData, type: 'Producer' })}
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div 
//                           className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
//                           style={{ backgroundColor: '#288EC2' }}
//                         >
//                           <Building size={24} />
//                         </div>
//                         <div>
//                           <h3 className="font-bold text-gray-900 text-lg">Producer</h3>
//                           <p className="text-gray-600">I manufacture or produce goods</p>
//                         </div>
//                       </div>
//                       {formData.type === 'Producer' && (
//                         <div className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#288EC2' }}>
//                           <div className="w-2 h-2 bg-white rounded-full"></div>
//                         </div>
//                       )}
//                     </div>

//                     <div 
//                       className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
//                         formData.type === 'Provider' 
//                           ? 'border-green-500 shadow-lg' 
//                           : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
//                       }`}
//                       style={formData.type === 'Provider' ? { borderColor: '#6EBD49' } : {}}
//                       onClick={() => setFormData({ ...formData, type: 'Provider' })}
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div 
//                           className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
//                           style={{ backgroundColor: '#6EBD49' }}
//                         >
//                           <User size={24} />
//                         </div>
//                         <div>
//                           <h3 className="font-bold text-gray-900 text-lg">Provider</h3>
//                           <p className="text-gray-600">I provide services to businesses</p>
//                         </div>
//                       </div>
//                       {formData.type === 'Provider' && (
//                         <div className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6EBD49' }}>
//                           <div className="w-2 h-2 bg-white rounded-full"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Company Information */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">
//                       Company Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.companyName}
//                       onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="Enter your company name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">Profile Image</label>
//                     <div 
//                       className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
//                       onClick={() => handleImageUpload('profileImage')}
//                     >
//                       {formData.profileImage ? (
//                         <img src={formData.profileImage} alt="Profile" className="w-16 h-16 mx-auto rounded-full object-cover" />
//                       ) : (
//                         <div>
//                           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
//                             <Plus size={20} className="text-gray-500" />
//                           </div>
//                           <p className="text-sm text-gray-600">Click to upload profile image</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Business Details */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Business Category <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     required
//                     value={formData.category}
//                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   >
//                     <option value="">Select your business category</option>
//                     {categories.map(cat => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Lead Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     placeholder="Brief, descriptive title for your lead"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Description <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     required
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
//                     rows="4"
//                     placeholder="Detailed description of your product/service or requirement..."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Specific Details</label>
//                   <textarea
//                     value={formData.specificDetails}
//                     onChange={(e) => setFormData({ ...formData, specificDetails: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
//                     rows="3"
//                     placeholder="Additional requirements, certifications, specifications..."
//                   />
//                 </div>

//                 {/* Product Images */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Product/Service Images</label>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {formData.productImages.map((img, index) => (
//                       <div key={index} className="relative group">
//                         <img src={img} alt={`Product ${index + 1}`} className="w-full h-24 object-cover rounded-lg border border-gray-300" />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const newImages = formData.productImages.filter((_, i) => i !== index);
//                             setFormData({ ...formData, productImages: newImages });
//                           }}
//                           className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                     {formData.productImages.length < 6 && (
//                       <div 
//                         className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
//                         onClick={() => handleImageUpload('productImages')}
//                       >
//                         <Plus size={20} className="text-gray-500" />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">Location</label>
//                     <input
//                       type="text"
//                       value={formData.location}
//                       onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="City, State"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">Phone</label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">Email</label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="contact@company.com"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-6">
//                   <button
//                     type="submit"
//                     className="w-full py-4 px-6 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg text-lg"
//                     style={{ backgroundColor: '#288EC2' }}
//                   >
//                     Create Lead
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Browse/Saved Leads */}
//         {(activeTab === 'browse' || activeTab === 'saved') && (
//           <div>
//             {/* Search and Filter */}
//             <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="text"
//                     placeholder="Search leads by company, title, or category..."
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   />
//                 </div>
//                 <div className="flex gap-3">
//                   <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[180px]">
//                     <option>All Categories</option>
//                     {categories.map(cat => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                   <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                     <Filter size={20} className="text-gray-500" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Leads Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {leads
//                 .filter(lead => activeTab === 'browse' || savedLeads.has(lead.id))
//                 .map(lead => (
//                 <div key={lead.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
//                   {/* Lead Header */}
//                   <div className="p-6 border-b border-gray-100">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center space-x-3">
//                         {lead.profileImage && (
//                           <img src={lead.profileImage} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
//                         )}
//                         <div>
//                           <h3 className="font-semibold text-gray-900">{lead.companyName}</h3>
//                           <div className="flex items-center space-x-2 mt-1">
//                             <span 
//                               className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
//                               style={{ backgroundColor: lead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}
//                             >
//                               {lead.type}
//                             </span>

//                           </div>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => toggleSaveLead(lead.id)}
//                         className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                       >
//                         {savedLeads.has(lead.id) ? (
//                           <BookmarkCheck size={20} style={{ color: '#F37E3A' }} />
//                         ) : (
//                           <Bookmark size={20} className="text-gray-400" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Lead Image */}
//                   {lead.productImages.length > 0 && (
//                     <div className="relative h-48 bg-gray-100">
//                       <img 
//                         src={lead.productImages[0]} 
//                         alt="Product" 
//                         className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
//                         onClick={() => openLeadDetail(lead)}
//                       />
//                       {lead.productImages.length > 1 && (
//                         <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
//                           1/{lead.productImages.length}
//                         </div>
//                       )}
//                     </div>
//                   )}

//                   {/* Lead Content */}
//                   <div className="p-6">
//                     <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{lead.title}</h4>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-3">{lead.description}</p>

//                     <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                       <div className="flex items-center space-x-1">
//                         <Tag size={14} />
//                         <span>{lead.category}</span>
//                       </div>
//                       {lead.location && (
//                         <div className="flex items-center space-x-1">
//                           <MapPin size={14} />
//                           <span>{lead.location}</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <div className="flex items-center space-x-4 text-sm text-gray-500">
//                         <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
//                           <Heart size={14} />
//                           <span>{lead.likes}</span>
//                         </button>
//                         <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
//                           <MessageCircle size={14} />
//                           <span>{lead.comments}</span>
//                         </button>
//                         <div className="flex items-center space-x-1">
//                           <Eye size={14} />
//                           <span>{lead.views}</span>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => openLeadDetail(lead)}
//                         className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
//                         style={{ backgroundColor: '#288EC2' }}
//                       >
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty State */}
//             {activeTab === 'saved' && leads.filter(lead => savedLeads.has(lead.id)).length === 0 && (
//               <div className="text-center py-16">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Bookmark size={32} className="text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved leads yet</h3>
//                 <p className="text-gray-600 mb-6">Save leads that interest you to access them later</p>
//                 <button
//                   onClick={() => setActiveTab('browse')}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
//                   style={{ backgroundColor: '#288EC2' }}
//                 >
//                   Browse Leads
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Lead Detail Modal */}
//       {selectedLead && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
//               <h3 className="text-xl font-semibold text-gray-900">{selectedLead.companyName}</h3>
//               <button
//                 onClick={() => setSelectedLead(null)}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
//               {/* Image Gallery */}
//               <div>
//                 {selectedLead.productImages.length > 0 && (
//                   <div className="relative">
//                     <img 
//                       src={selectedLead.productImages[currentImageIndex]} 
//                       alt="Product" 
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     {selectedLead.productImages.length > 1 && (
//                       <>
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
//                         >
//                           <ChevronLeft size={20} />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
//                         >
//                           <ChevronRight size={20} />
//                         </button>
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                           {selectedLead.productImages.map((_, index) => (
//                             <button
//                               key={index}
//                               onClick={() => setCurrentImageIndex(index)}
//                               className={`w-3 h-3 rounded-full transition-colors ${
//                                 index === currentImageIndex ? 'bg-white' : 'bg-white/50'
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Lead Details */}
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   {selectedLead.profileImage && (
//                     <img src={selectedLead.profileImage} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
//                   )}
//                   <div>
//                     <h4 className="text-xl font-semibold text-gray-900">{selectedLead.companyName}</h4>
//                     <div className="flex items-center space-x-2 mt-1">
//                       <span 
//                         className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full"
//                         style={{ backgroundColor: selectedLead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}
//                       >
//                         {selectedLead.type}
//                       </span>

//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h5 className="text-lg font-semibold text-gray-900 mb-3">{selectedLead.title}</h5>
//                   <p className="text-gray-600 mb-4">{selectedLead.description}</p>

//                   {selectedLead.specificDetails && (
//                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                       <h6 className="font-medium text-gray-900 mb-2">Specific Details:</h6>
//                       <p className="text-gray-700 text-sm">{selectedLead.specificDetails}</p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center text-sm text-gray-500 space-x-6">
//                   <div className="flex items-center space-x-1">
//                     <Tag size={16} />
//                     <span>{selectedLead.category}</span>
//                   </div>
//                   {selectedLead.location && (
//                     <div className="flex items-center space-x-1">
//                       <MapPin size={16} />
//                       <span>{selectedLead.location}</span>
//                     </div>
//                   )}
//                   <div className="flex items-center space-x-1">
//                     <Calendar size={16} />
//                     <span>{new Date(selectedLead.postedDate).toLocaleDateString()}</span>
//                   </div>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                   <h6 className="font-medium text-gray-900 mb-3">Contact Information</h6>
//                   <div className="space-y-2">
//                     {selectedLead.contact.phone && (
//                       <div className="flex items-center space-x-2">
//                         <Phone size={16} className="text-gray-500" />
//                         <span className="text-gray-700">{selectedLead.contact.phone}</span>
//                       </div>
//                     )}
//                     {selectedLead.contact.email && (
//                       <div className="flex items-center space-x-2">
//                         <Mail size={16} className="text-gray-500" />
//                         <span className="text-gray-700">{selectedLead.contact.email}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <button
//                     onClick={() => toggleSaveLead(selectedLead.id)}
//                     className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
//                       savedLeads.has(selectedLead.id)
//                         ? 'bg-orange-50 text-orange-700 border border-orange-200'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={savedLeads.has(selectedLead.id) ? { 
//                       backgroundColor: '#FFF7ED', 
//                       color: '#F37E3A',
//                       borderColor: '#FED7AA'
//                     } : {}}
//                   >
//                     {savedLeads.has(selectedLead.id) ? (
//                       <>
//                         <BookmarkCheck size={18} className="inline mr-2" />
//                         Saved
//                       </>
//                     ) : (
//                       <>
//                         <Bookmark size={18} className="inline mr-2" />
//                         Save Lead
//                       </>
//                     )}
//                   </button>
//                   <button 
//                     className="flex-1 py-3 px-4 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
//                     style={{ backgroundColor: '#288EC2' }}
//                   >
//                     Contact Now
//                   </button>
//                 </div>

//                 {/* Engagement Stats */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
//                   <div className="flex items-center space-x-4">
//                     <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
//                       <Heart size={16} />
//                       <span>{selectedLead.likes} likes</span>
//                     </button>
//                     <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
//                       <MessageCircle size={16} />
//                       <span>{selectedLead.comments} comments</span>
//                     </button>
//                     <div className="flex items-center space-x-1">
//                       <Eye size={16} />
//                       <span>{selectedLead.views} views</span>
//                     </div>
//                   </div>
//                   <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
//                     <Share size={16} />
//                     <span>Share</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Leads;

import React, { useEffect, useState } from 'react';
import { Plus, Search, Bookmark, BookmarkCheck, Heart, MessageCircle, Share, ChevronLeft, ChevronRight, X, Building, MapPin, Phone, Mail, User, Calendar, Tag, Filter, Menu, Star, TrendingUp, Clock, Eye, ArrowRight, Zap, Award, Users, Globe, Camera, FileText, ChevronDown, Shield, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leads = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [savedLeads, setSavedLeads] = useState(new Set());
  const [leads, setLeads] = useState([
    {
      id: 1,
      type: 'Producer',
      companyName: 'TechCorp Manufacturing',
      category: 'Electronics & Electronics',
      title: 'High-Quality Circuit Boards Available',
      description: 'We manufacture premium circuit boards for various electronic applications with ISO certification.',
      specificDetails: 'ISO 9001 certified, RoHS compliant, Lead-free soldering',
      profileImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      productImages: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop'
      ],
      location: 'Mumbai, Maharashtra',
      contact: {
        phone: '+91 98765 43210',
        email: 'contact@techcorp.com'
      },
      postedDate: '2024-01-15',
      likes: 24,
      comments: 8,
      views: 156,
      rating: 4.8,
      isVerified: true,
      isTrending: true,
      features: ['ISO 9001 Certified', 'RoHS Compliant', '24/7 Support', 'Fast Delivery'],
      certifications: ['ISO 9001:2015', 'CE Marking', 'FCC Approved']
    },
    {
      id: 2,
      type: 'Provider',
      companyName: 'Premium Logistics Solutions',
      category: 'Industrial Supplies',
      title: 'Complete Supply Chain Management Services',
      description: 'End-to-end logistics solutions for manufacturing industries with real-time tracking.',
      specificDetails: 'Pan-India coverage, 24/7 support, Temperature-controlled storage',
      profileImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      productImages: [
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      ],
      location: 'Delhi, India',
      contact: {
        phone: '+91 87654 32109',
        email: 'info@premiumlogistics.com'
      },
      postedDate: '2024-01-12',
      likes: 31,
      comments: 12,
      views: 203,
      rating: 4.6,
      isVerified: false,
      isTrending: false,
      features: ['Pan-India Coverage', 'Real-time Tracking', 'Temperature Control', 'Insurance Coverage'],
      certifications: ['GST Registered', 'FSSAI Approved', 'Transport License']
    }
  ]);

  const toggleSaveLead = (leadId) => {
    const newSavedLeads = new Set(savedLeads);
    if (newSavedLeads.has(leadId)) {
      newSavedLeads.delete(leadId);
    } else {
      newSavedLeads.add(leadId);
    }
    setSavedLeads(newSavedLeads);
  };

  const openLeadDetail = (lead) => {
    setSelectedLead(lead);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedLead && selectedLead.productImages.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedLead.productImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedLead && selectedLead.productImages.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedLead.productImages.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (selectedLead) {
      document.body.classList.add('overflow-y-hidden');
      return () => document.body.classList.remove('overflow-y-hidden');
    }
  }, [selectedLead]);

  return (
    <div className="mt-4 md:mt-6 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 relative">

      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: `radial-gradient(circle, #288EC2 0%, transparent 70%)` }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl animate-pulse"
          style={{ background: `radial-gradient(circle, #6EBD49 0%, transparent 70%)`, animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full opacity-6 blur-3xl animate-pulse"
          style={{ background: `radial-gradient(circle, #F37E3A 0%, transparent 70%)`, animationDelay: '4s' }}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-4 h-4 rotate-45 opacity-20 animate-spin"
          style={{ backgroundColor: '#288EC2', animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 rotate-45 opacity-15 animate-spin"
          style={{ backgroundColor: '#6EBD49', animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-8 w-3 h-3 rotate-45 opacity-25 animate-spin"
          style={{ backgroundColor: '#F37E3A', animationDuration: '15s' }}></div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 md:py-8 relative z-10">

        {/* Enhanced Header */}
        <div className="mb-8 md:mb-12">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gray-800 bg-clip-text text-transparent">
                Your Network is Your Networth
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-6">
              Connect with validated Producers and verified Providers
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center space-x-8 md:space-x-12 mb-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-2xl shadow-xl flex items-center justify-center mb-2 transform group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: '#F37E3A' }}>
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">{leads.length}+</div>
                <div className="text-sm text-slate-600">Active Leads</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-2xl shadow-xl flex items-center justify-center mb-2 transform group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: '#288EC2' }}>
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">{savedLeads.size}</div>
                <div className="text-sm text-slate-600">Saved</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-2xl shadow-xl flex items-center justify-center mb-2 transform group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: '#6EBD49' }}>
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Browse by Categories Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#F37E3A] rounded-lg flex items-center justify-center">
                <Menu size={16} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-700">Browse by Categories</h2>
            </div>
          </div>

          {/* Category Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 p-4">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#288EC2] rounded flex items-center justify-center">
                    <FileText size={14} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-700">Producers</span>
                </div>
                <div className="text-slate-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl border border-green-200/50 p-4">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#6EBD49] rounded flex items-center justify-center">
                    <Star size={14} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-700">Providers</span>
                </div>
                <div className="text-slate-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Open Opportunities */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-orange-200/50 p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl font-bold text-[#F37E3A] mb-4">7</div>
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <TrendingUp size={20} />
                <span className="font-semibold">Open Opportunities</span>
              </div>
            </div>

            {/* Producers */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-blue-200/50 p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl font-bold text-[#288EC2] mb-4">4</div>
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <div className="w-5 h-5 bg-[#288EC2] rounded flex items-center justify-center">
                  <FileText size={12} className="text-white" />
                </div>
                <span className="font-semibold">Producers</span>
              </div>
            </div>

            {/* Providers */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-green-200/50 p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl font-bold text-[#6EBD49] mb-4">3</div>
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <div className="w-5 h-5 bg-[#6EBD49] rounded flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
                <span className="font-semibold">Providers</span>
              </div>
            </div>
          </div>

          {/* Combined Navigation Section - Browse/Saved Tabs on Left, Create Button on Right */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            {/* Left Side - Tab Navigation */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/40">
              <nav className="flex space-x-2">
                {[
                  { key: 'browse', label: 'Browse Leads', icon: Search },
                  { key: 'saved', label: 'Saved Leads', icon: BookmarkCheck }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`group relative flex items-center space-x-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === key
                      ? 'text-white shadow-xl transform scale-105'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                      }`}
                    style={activeTab === key ? { backgroundColor: '#288EC2' } : {}}
                  >
                    <Icon size={20} className={`${activeTab === key ? 'animate-pulse' : 'group-hover:scale-110'} transition-transform duration-300`} />
                    <span>{label}</span>
                    {activeTab === key && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side - Create New Lead Button */}
            <Link
              to="/create-lead"
              className="group relative inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#F37E3A' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Plus size={24} className="mr-3 transform group-hover:rotate-90 transition-transform duration-300" />
              <span className="relative">Create New Lead</span>
              <div className="ml-3 w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>

        {/* Browse/Saved Leads */}
        <div>
          {/* Enhanced Leads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {leads
              .filter(lead => activeTab === 'browse' || savedLeads.has(lead.id))
              .map((lead, index) => (
                <div key={lead.id}
                  className="group bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2 flex flex-col">

                  {/* Enhanced Lead Header */}
                  <div className="relative p-6 border-b border-slate-100/50 bg-gradient-to-br from-slate-50/50 to-transparent">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transform rotate-45"
                      style={{ background: `linear-gradient(135deg, ${lead.type === 'Producer' ? '#288EC2' : '#6EBD49'} 0%, transparent 70%)` }}></div>

                    <div className="flex items-center justify-between mb-4 relative">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          {lead.profileImage && (
                            <img src={lead.profileImage} alt="Profile"
                              className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white transform group-hover:scale-110 transition-transform duration-300" />
                          )}
                          {lead.isVerified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
                              style={{ backgroundColor: '#6EBD49' }}>
                              <Star size={12} className="text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 h-14 flex items-center">{lead.companyName}</h3>
                          <div className="flex items-center space-x-3 h-8">
                            <span
                              className="inline-block px-3 py-1.5 text-sm font-bold text-white rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                              style={{ backgroundColor: lead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}
                            >
                              {lead.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSaveLead(lead.id)}
                        className="p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      >
                        {savedLeads.has(lead.id) ? (
                          <BookmarkCheck size={20} style={{ color: '#F37E3A' }} className="animate-pulse" />
                        ) : (
                          <Bookmark size={20} className="text-slate-400 group-hover:text-slate-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Lead Image */}
                  {lead.productImages.length > 0 && (
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img
                        src={lead.productImages[0]}
                        alt="Product"
                        className="w-full h-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-110"
                        onClick={() => openLeadDetail(lead)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {lead.productImages.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold">
                          1/{lead.productImages.length}
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => openLeadDetail(lead)}
                          className="px-6 py-3 bg-white/95 backdrop-blur-sm text-slate-800 font-bold rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Lead Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <h4 className="font-bold text-slate-800 text-lg line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {lead.title}
                    </h4>
                    <p className="text-slate-600 text-base line-clamp-3 leading-relaxed flex-grow">
                      {lead.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-2 group/tag hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                        <Tag size={16} />
                        <span className="font-medium truncate">{lead.category}</span>
                      </div>
                      {lead.location && (
                        <div className="flex items-center space-x-2 group/location hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
                          <MapPin size={16} />
                          <span className="font-medium truncate">{lead.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <button
                        onClick={() => openLeadDetail(lead)}
                        className="w-full px-4 py-3 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                        style={{ backgroundColor: '#288EC2' }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Enhanced Empty State */}
          {activeTab === 'saved' && leads.filter(lead => savedLeads.has(lead.id)).length === 0 && (
            <div className="text-center py-16 space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Bookmark size={32} className="text-slate-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">No saved leads yet</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto">Save leads that interest you to access them later and build your network</p>
              </div>
              <button
                onClick={() => setActiveTab('browse')}
                className="px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                style={{ backgroundColor: '#288EC2' }}
              >
                Browse Leads
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-7xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-white/50 flex flex-col">
            {/* Modal Header */}
            <div className="flex-shrink-0 bg-white/90 backdrop-blur-xl border-b border-slate-200 p-6 flex items-center justify-between rounded-t-3xl z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: selectedLead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}>
                  {selectedLead.type === 'Producer' ? <Building className="text-white" size={20} /> : <User className="text-white" size={20} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{selectedLead.companyName}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-3 hover:bg-slate-100 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
              {selectedLead.productImages.length > 0 ? (
                /* WITH IMAGES: Two-column layout */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Left Column - Sticky Image Gallery */}
                  <div className="sticky top-6 self-start space-y-6 h-fit">
                    {/* Main Image Gallery */}
                    <div className="relative group">
                      <div className="w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={selectedLead.productImages[currentImageIndex]}
                          alt="Product"
                          className="w-full h-auto max-h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
                          style={{ display: 'block' }}
                        />
                      </div>
                      {selectedLead.productImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                            {selectedLead.productImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                  ? 'bg-white shadow-lg scale-125'
                                  : 'bg-white/60 hover:bg-white/80'
                                  }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails */}
                    {selectedLead.productImages.length > 1 && (
                      <div className="space-y-3">
                        <h6 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                          <Camera size={16} />
                          <span>All Images ({selectedLead.productImages.length})</span>
                        </h6>
                        <div className="grid grid-cols-4 gap-3">
                          {selectedLead.productImages.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${index === currentImageIndex ? 'ring-2' : ''
                                }`}
                              style={index === currentImageIndex ? { ringColor: selectedLead.type === 'Producer' ? '#288EC2' : '#6EBD49' } : {}}
                            >
                              <img
                                src={img}
                                alt={`Product ${index + 1}`}
                                className="w-full h-16 object-cover"
                              />
                              {index === currentImageIndex && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                  <div className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: selectedLead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - All Content */}
                  <div className="space-y-6">
                    {/* Company Header */}
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl border border-slate-200">
                      {selectedLead.profileImage && (
                        <img src={selectedLead.profileImage} alt="Profile"
                          className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-white" />
                      )}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{selectedLead.companyName}</h4>
                        <div className="flex items-center space-x-3">
                          <span
                            className="inline-block px-3 py-1.5 text-sm font-bold text-white rounded-full shadow-lg"
                            style={{ backgroundColor: selectedLead.type === 'Producer' ? '#288EC2' : '#6EBD49' }}
                          >
                            {selectedLead.type}
                          </span>
                          {selectedLead.isVerified && (
                            <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-100 rounded-full">
                              <Star size={14} className="text-emerald-600" />
                              <span className="text-sm font-bold text-emerald-600">Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Lead Details */}
                    <div className="space-y-4">
                      <h5 className="text-xl font-bold text-slate-800">{selectedLead.title}</h5>
                      <p className="text-slate-600 text-lg leading-relaxed">{selectedLead.description}</p>
                    </div>

                    {/* Specific Details */}
                    {selectedLead.specificDetails && (
                      <div className="p-5 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-slate-200 shadow-lg">
                        <h6 className="font-bold text-slate-800 mb-3 text-lg flex items-center space-x-2">
                          <Award size={18} />
                          <span>Specific Details</span>
                        </h6>
                        <p className="text-slate-700 text-base leading-relaxed">{selectedLead.specificDetails}</p>
                      </div>
                    )}

                    {/* Category, Location, Date */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 cursor-pointer">
                        <Tag size={16} className="text-slate-500" />
                        <div>
                          <div className="text-sm font-medium text-slate-500">Category</div>
                          <div className="font-bold text-slate-700">{selectedLead.category}</div>
                        </div>
                      </div>
                      {selectedLead.location && (
                        <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 cursor-pointer">
                          <MapPin size={16} className="text-slate-500" />
                          <div>
                            <div className="text-sm font-medium text-slate-500">Location</div>
                            <div className="font-bold text-slate-700">{selectedLead.location}</div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 cursor-pointer">
                        <Calendar size={16} className="text-slate-500" />
                        <div>
                          <div className="text-sm font-medium text-slate-500">Posted</div>
                          <div className="font-bold text-slate-700">{new Date(selectedLead.postedDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-200 shadow-lg">
                      <h6 className="font-bold text-slate-800 mb-4 text-lg flex items-center space-x-2">
                        <Phone size={18} />
                        <span>Contact Information</span>
                      </h6>
                      <div className="space-y-3">
                        {selectedLead.contact.phone && (
                          <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 cursor-pointer">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                              style={{ backgroundColor: '#288EC2' }}>
                              <Phone size={16} className="text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-500">Phone</div>
                              <div className="font-bold text-slate-700">{selectedLead.contact.phone}</div>
                            </div>
                          </div>
                        )}
                        {selectedLead.contact.email && (
                          <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 cursor-pointer">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                              style={{ backgroundColor: '#6EBD49' }}>
                              <Mail size={16} className="text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-500">Email</div>
                              <div className="font-bold text-slate-700">{selectedLead.contact.email}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => toggleSaveLead(selectedLead.id)}
                        className={`group flex-1 py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl text-lg ${savedLeads.has(selectedLead.id)
                          ? 'bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-200'
                          : 'bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 border-2 border-slate-300'
                          }`}
                        style={savedLeads.has(selectedLead.id) ? {
                          color: '#F37E3A',
                          borderColor: '#F37E3A'
                        } : { color: '#64748b' }}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          {savedLeads.has(selectedLead.id) ? (
                            <BookmarkCheck size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <Bookmark size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span>{savedLeads.has(selectedLead.id) ? 'Saved' : 'Save Lead'}</span>
                        </div>
                      </button>
                      <button
                        className="group flex-1 py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl text-lg bg-gradient-to-r hover:shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #288EC2 0%, #1e7ba8 100%)' }}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          <span>Contact Now</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* WITHOUT IMAGES: Single centered column */
                <div className="flex justify-center p-8">
                  <div className="w-full max-w-4xl space-y-6">
                    {/* Rest of modal content for no images case */}
                    {/* Same structure as above but in single column */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </div>
  );
};

export default Leads;

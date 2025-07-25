// src/pages/CreateLead.jsx
import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Building, Globe, MapPin, Mail, Phone, MessageCircle,
  Plus, Search, Star, Tag, User, Zap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

/* ------------------------------------------------------------------ */
/*  16  categories for each tab (update any label text here as needed) */
const PRODUCER_CATEGORIES = [
  'Textiles & Apparel',         'Leather & Footwear',
  'Handicraft Products',        'Furniture & Furnishings',
  'Sporting Goods',             'Hotels & Hospitality',
  'Medical Supplies',           'Electricals & Electronics',
  'Automobile Components',      'Building Hardware',
  'Industrial Supplies',        'Metals & Machinery',
  'Chemicals',                  'Pharma',
  'Food & Beverages',           'Agriculture Products'
];

const PROVIDER_CATEGORIES = [
  'Legal Advisors',             'Chartered Accountants',
  'HR Consultants & Recruiters','Manpower Suppliers',
  'Real Estate Brokers',        'Architects & Designers',
  'Facility Contractors',       'PR Agencies',
  'IT Solutions',               'Travel & Transportation',
  'Medical Professionals',      'Catering Services',
  'Insurance Services',         'Printing & Packaging',
  'Industrial Supplies',        'Security Services'
];
/* ------------------------------------------------------------------ */

const CreateLead = () => {
  const navigate   = useNavigate();
  const [type, setType]           = useState('Producer');      // Producer | Provider (for lead-type)
  const [catTab, setCatTab]       = useState('producer');      // producers | providers  (for category list)
  const [catQuery, setCatQuery]   = useState('');              // search box filter
  const [form, setForm] = useState({
    companyName: '', category: '',
    title: '', description: '', specificDetails: '',
    profileImage: '', productImages: [],
    location: '', phone: '', email: ''
  });

  /* ---------------- image uploader ---------------- */
  const pickImage = (field, idx = null) => {
    const i = document.createElement('input');
    i.type = 'file'; i.accept = 'image/*';
    i.onchange = e => {
      const f = e.target.files?.[0]; if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        if (field === 'productImages') {
          const imgs = [...form.productImages];
          idx !== null ? (imgs[idx] = ev.target.result) : imgs.push(ev.target.result);
          setForm({ ...form, productImages: imgs });
        } else setForm({ ...form, [field]: ev.target.result });
      };
      r.readAsDataURL(f);
    };
    i.click();
  };

  /* ---------------- form submit ---------------- */
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Lead created →', { type, ...form });
    navigate('/leads');                       // back to leads page
  };

  /* ---------------- derived lists ---------------- */
  const CATS = (catTab === 'producer' ? PRODUCER_CATEGORIES : PROVIDER_CATEGORIES)
    .filter(c => c.toLowerCase().includes(catQuery.toLowerCase()));

  /* ================================================================= */
  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 relative">
      {/* floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0  left-1/4 w-72 h-72 rounded-full bg-[#288EC2] opacity-10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#6EBD49] opacity-10 blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#F37E3A] opacity-10 blur-3xl animate-pulse delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">

        {/* back link */}
        <Link
          to="/leads"
          className="inline-flex items-center mb-6 px-5 py-3 bg-white/80 backdrop-blur-xl font-bold text-slate-700 rounded-2xl shadow
                     hover:bg-white hover:shadow-lg transition">
          <ArrowLeft size={20} className="mr-2" /> Back to Leads
        </Link>

        {/* hero quotes ------------------------------------------------ */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="-rotate-12 w-12 h-12 rounded-2xl bg-[#288EC2] flex items-center justify-center shadow-xl">
              <Globe size={24} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r
                           from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent">
              Your Network is Your Networth
            </h1>
            <div className="rotate-12 w-12 h-12 rounded-2xl bg-[#6EBD49] flex items-center justify-center shadow-xl">
              <Zap size={24} className="text-white" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with validated Producers and verified Providers
          </p>
        </div>

        {/* ------------------- form card ------------------- */}
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden">

          {/* header */}
          <div className="relative px-8 py-8 bg-gradient-to-br from-slate-50 to-blue-50/50 border-b border-slate-200">
            <div className="absolute right-0 top-0 w-32 h-32 opacity-10 rotate-12"
                 style={{ background: 'conic-gradient(#288EC2,#6EBD49,#F37E3A,#288EC2)' }} />
            <div className="flex items-center space-x-4 relative">
              <div className="w-16 h-16 rounded-2xl bg-[#288EC2] text-white flex items-center justify-center shadow-xl">
                <Plus size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-800">Create New Lead</h2>
                <p className="text-lg text-slate-600">Share your business opportunity with our network</p>
              </div>
            </div>
          </div>

          {/* body */}
          <form onSubmit={handleSubmit} className="p-8 space-y-10">

            {/* 1. lead-type radio boxes */}
            <div>
              <p className="font-bold text-xl mb-4">What type of lead are you posting? <span className="text-red-500">*</span></p>
              <div className="grid gap-6 md:grid-cols-2">
                {[{
                  val:'Producer', icon:Building, color:'#288EC2', desc:'I manufacture or produce goods'
                },{
                  val:'Provider', icon:User,     color:'#6EBD49', desc:'I provide services to businesses'
                }].map(({val,icon:Icon,color,desc}) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setType(val)}
                    className={`relative p-6 border rounded-2xl text-left transition
                                ${type===val ? 'shadow-2xl scale-105' : 'hover:shadow-lg'}`}
                    style={type===val
                      ? { borderColor:color, boxShadow:`0 20px 40px ${color}25` }
                      : { borderColor:'#e5e7eb' }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                           style={{ background:color }}>
                        <Icon size={24} className="text-white"/>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-1">{val}</h3>
                        <p className="text-slate-600">{desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. company & profile image */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* company */}
              <div>
                <label className="font-bold text-lg">Company Name <span className="text-red-500">*</span></label>
                <input
                  required
                  value={form.companyName}
                  onChange={e=>setForm({...form, companyName:e.target.value})}
                  className="mt-2 w-full px-6 py-4 border-2 border-slate-200 rounded-xl bg-white/70 shadow focus:border-blue-500"
                  placeholder="Enter your company name" />
              </div>

              {/* profile image */}
              <div>
                <label className="font-bold text-lg">Profile Image</label>
                <div
                  onClick={()=>pickImage('profileImage')}
                  className="mt-2 h-[98px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center
                             justify-center bg-white/50 cursor-pointer hover:border-slate-400 transition">
                  {form.profileImage
                    ? <img src={form.profileImage} alt=""
                           className="w-20 h-20 rounded-full object-cover shadow" />
                    : <Plus size={24} className="text-slate-400" />}
                </div>
              </div>
            </div>

            {/* 3. business category  (EXACT style from screenshot) */}
            <div className="space-y-4">
              <p className="font-bold text-lg flex items-center">
                <Tag size={20} className="mr-2 text-slate-500"/> Business Category <span className="text-red-500">*</span>
              </p>

              {/* toggle */}
              <div className="flex rounded-xl border-2 overflow-hidden w-max">
                {[
                  {key:'producer', label:'Producers', color:'#288EC2'},
                  {key:'provider', label:'Providers', color:'#6EBD49'}
                ].map(({key,label,color})=>(
                  <button
                    key={key}
                    type="button"
                    onClick={()=>{setCatTab(key); setCatQuery(''); setForm({...form, category:''});}}
                    className={`px-6 py-2 font-bold transition ${catTab===key
                      ? 'text-white' : 'text-slate-600 hover:text-slate-800'}`}
                    style={catTab===key
                      ? { background:color }
                      : { background:'#ffffff' }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* search */}
              <div className="relative max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                <input
                  value={catQuery}
                  onChange={e=>setCatQuery(e.target.value)}
                  placeholder="Search categories…"
                  className="w-full pl-11 pr-4 py-3 border-2 border-slate-200 rounded-xl bg-white/70 shadow focus:border-blue-500" />
              </div>

              {/* category grid (scrollable) */}
              <div className="h-48 overflow-y-auto pr-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {CATS.map(c=>(
                    <button
                      key={c}
                      type="button"
                      onClick={()=>setForm({...form, category:c})}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition
                                  ${form.category===c
                                    ? 'bg-[#288EC2] text-white shadow'
                                    : 'bg-white/80 hover:bg-white'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. title / description / details */}
            {[
              {label:'Lead Title', field:'title', placeholder:'Brief, descriptive title', icon:Star, rows:1},
              {label:'Description', field:'description', placeholder:'Detailed description…', icon:MessageCircle, rows:4},
              {label:'Specific Details', field:'specificDetails', placeholder:'Certifications, quantities…', icon:Star, rows:3}
            ].map(({label,field,placeholder,icon:Icon,rows})=>(
              <div key={field}>
                <label className="font-bold text-lg flex items-center">
                  <Icon size={18} className="mr-2 text-slate-500" /> {label}{field!=='specificDetails' && <span className="text-red-500">*</span>}
                </label>
                {rows===1
                  ? <input
                      required={field!=='specificDetails'}
                      value={form[field]}
                      onChange={e=>setForm({...form,[field]:e.target.value})}
                      placeholder={placeholder}
                      className="mt-2 w-full px-6 py-4 border-2 border-slate-200 rounded-xl bg-white/70 shadow focus:border-blue-500"/>
                  : <textarea
                      rows={rows}
                      required={field!=='specificDetails'}
                      value={form[field]}
                      onChange={e=>setForm({...form,[field]:e.target.value})}
                      placeholder={placeholder}
                      className="mt-2 w-full px-6 py-4 border-2 border-slate-200 rounded-xl bg-white/70 shadow focus:border-blue-500 resize-none"/>}
              </div>
            ))}

            {/* 5. product images */}
            <div className="space-y-2">
              <p className="font-bold text-lg flex items-center"><Star size={18} className="mr-2 text-slate-500"/> Product / Service Images</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {form.productImages.map((img,i)=>(
                  <div key={i} className="relative group">
                    <img src={img} alt="" className="w-full h-24 object-cover rounded-xl border shadow" />
                    <button type="button"
                            onClick={()=>setForm({...form, productImages: form.productImages.filter((_,idx)=>idx!==i)})}
                            className="absolute -top-1.5 -right-1.5 bg-red-600 text-white w-5 h-5 rounded-full text-xs">×</button>
                  </div>
                ))}
                {form.productImages.length<6 &&
                  <button type="button"
                          onClick={()=>pickImage('productImages')}
                          className="border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center">
                    <Plus size={20} className="text-slate-400"/>
                  </button>}
              </div>
            </div>

            {/* 6. contact */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {f:'location',  icon:MapPin, ph:'City, State',   type:'text'},
                {f:'phone',     icon:Phone,  ph:'+91 98765 43210',type:'tel'},
                {f:'email',     icon:Mail,   ph:'contact@company.com',type:'email'}
              ].map(({f,icon:Icon,ph,type})=>(
                <div key={f}>
                  <label className="font-bold text-lg flex items-center">
                    <Icon size={18} className="mr-2 text-slate-500"/> {f.charAt(0).toUpperCase()+f.slice(1)}
                  </label>
                  <input
                    value={form[f]}
                    onChange={e=>setForm({...form,[f]:e.target.value})}
                    placeholder={ph}
                    type={type}
                    className="mt-2 w-full px-6 py-4 border-2 border-slate-200 rounded-xl bg-white/70 shadow focus:border-blue-500"/>
                </div>
              ))}
            </div>

            {/* 7. submit */}
            <button
              type="submit"
              className="w-full py-5 flex items-center justify-center font-black text-xl rounded-2xl text-white bg-[#288EC2] shadow-2xl
                         hover:scale-105 transition">
              <Zap size={24} className="mr-3 animate-pulse" /> Create Lead
              <ArrowRight size={24} className="ml-3 -translate-x-1 group-hover:translate-x-0 transition" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLead;

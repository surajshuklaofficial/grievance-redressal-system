# grievance-redressal-system


# auth routes 
POST /api/v1/user/auth/signup -> { firstName, lastName, email, contactNumber, password }; { token }
POST /api/v1/user/auth/signin -> { email, password }; { token }

# user routes
GET /api/v1/user/profile -> { token in autherization header }, { firstName, lastName, email, contactNumber }

# nlp routes
POST /api/v1/nlp/listen -> { userInfo, complaintDescription }; 
                           { departmentId, department, complaintSpecificRequirementslist(use this to create a JSON for complaint)} 

# department auth routes
POST /api/v1/department/auth/admin/register -> { department, complaintSpecificRequirements, password }; { token}
POST /api/v1/department/auth/admin/login -> { departmentID, password }; { token }

# department routes
GET /api/v1/department/:departmentID/admin/dashboard/complaints -> { all complaints by department }

# complaints routes
POST /api/v1/complaints/send -> { send complaints to concerned department }; 
                                { departmentId, department, comaplainant: userInfoJSONObject(fullName, email, contactNumber), 
                                complainantComplaintSpecificeInfo: JSONObject(given by nlm) }

# welcome routes
GET /api/v1/ -> { greet message( not for frontend)}



